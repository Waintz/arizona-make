/*
  Warnings:

  - You are about to drop the column `suspect_id` on the `RaceWitness` table. All the data in the column will be lost.
  - Added the required column `suspect_nickname` to the `RaceWitness` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_server` to the `RaceWitness` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RaceWitness" DROP CONSTRAINT "RaceWitness_suspect_id_fkey";

-- DropIndex
DROP INDEX "RaceWitness_race_id_suspect_id_idx";

-- AlterTable
ALTER TABLE "RaceWitness" DROP COLUMN "suspect_id",
ADD COLUMN     "suspect_nickname" TEXT NOT NULL,
ADD COLUMN     "suspect_server" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "RaceWitness_race_id_suspect_nickname_suspect_server_idx" ON "RaceWitness"("race_id", "suspect_nickname", "suspect_server");

-- AddForeignKey
ALTER TABLE "RaceWitness" ADD CONSTRAINT "RaceWitness_suspect_nickname_suspect_server_fkey" FOREIGN KEY ("suspect_nickname", "suspect_server") REFERENCES "GameAccount"("nickname", "server") ON DELETE RESTRICT ON UPDATE CASCADE;
