/*
  Warnings:

  - You are about to drop the column `userId` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Transactions` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "RaceStatus" ADD VALUE 'CANCELLED';

-- DropForeignKey
ALTER TABLE "Race" DROP CONSTRAINT "Race_userId_fkey";

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "userId",
ADD COLUMN     "creator_id" INTEGER,
ADD COLUMN     "server_start_time" TIMESTAMP(3),
ALTER COLUMN "is_vip" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "RaceParticipant" (
    "id" SERIAL NOT NULL,
    "race_id" INTEGER NOT NULL,
    "game_account_id" INTEGER NOT NULL,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "server_finish_at" TIMESTAMP(3),
    "client_time_ms" INTEGER,
    "is_disqualified" BOOLEAN NOT NULL DEFAULT false,
    "suspicion_reason" TEXT,

    CONSTRAINT "RaceParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaceWitness" (
    "id" SERIAL NOT NULL,
    "race_id" INTEGER NOT NULL,
    "observer_id" INTEGER NOT NULL,
    "suspect_id" INTEGER NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "server_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RaceWitness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaceTelemetry" (
    "id" SERIAL NOT NULL,
    "participant_id" INTEGER NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "z" DOUBLE PRECISION NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "client_timestamp" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RaceTelemetry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RaceParticipant_race_id_game_account_id_key" ON "RaceParticipant"("race_id", "game_account_id");

-- CreateIndex
CREATE INDEX "RaceWitness_race_id_suspect_id_idx" ON "RaceWitness"("race_id", "suspect_id");

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceParticipant" ADD CONSTRAINT "RaceParticipant_race_id_fkey" FOREIGN KEY ("race_id") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceParticipant" ADD CONSTRAINT "RaceParticipant_game_account_id_fkey" FOREIGN KEY ("game_account_id") REFERENCES "GameAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceWitness" ADD CONSTRAINT "RaceWitness_race_id_fkey" FOREIGN KEY ("race_id") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceWitness" ADD CONSTRAINT "RaceWitness_observer_id_fkey" FOREIGN KEY ("observer_id") REFERENCES "GameAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceWitness" ADD CONSTRAINT "RaceWitness_suspect_id_fkey" FOREIGN KEY ("suspect_id") REFERENCES "GameAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceTelemetry" ADD CONSTRAINT "RaceTelemetry_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "RaceParticipant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
