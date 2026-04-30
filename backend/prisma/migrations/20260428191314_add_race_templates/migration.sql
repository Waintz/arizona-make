/*
  Warnings:

  - You are about to drop the column `race_id` on the `Auction` table. All the data in the column will be lost.
  - You are about to drop the column `winner_id` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `evidence_id` on the `reports` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[template_id,start_at]` on the table `Race` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[race_id,user_id]` on the table `RaceParticipant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `target_type` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prize_type` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `RaceParticipant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- CreateEnum
CREATE TYPE "EvidenceFileType" AS ENUM ('PHOTO', 'VIDEO', 'FILE');

-- CreateEnum
CREATE TYPE "PrizeType" AS ENUM ('MONEY', 'POINTS', 'CUSTOM');

-- CreateEnum
CREATE TYPE "RaceAccessType" AS ENUM ('PUBLIC', 'PRIVATE', 'AUCTION');

-- CreateEnum
CREATE TYPE "RaceSource" AS ENUM ('SCHEDULED', 'MANUAL');

-- CreateEnum
CREATE TYPE "AuctionTargetType" AS ENUM ('RACE', 'ITEM', 'PROPERTY', 'CUSTOM');

-- AlterEnum
ALTER TYPE "RaceStatus" ADD VALUE 'CLOSED';

-- DropForeignKey
ALTER TABLE "Auction" DROP CONSTRAINT "Auction_race_id_fkey";

-- DropForeignKey
ALTER TABLE "Race" DROP CONSTRAINT "Race_winner_id_fkey";

-- DropIndex
DROP INDEX "Auction_race_id_key";

-- DropIndex
DROP INDEX "RaceParticipant_race_id_game_account_id_key";

-- AlterTable
ALTER TABLE "Auction" DROP COLUMN "race_id",
ADD COLUMN     "target_id" INTEGER,
ADD COLUMN     "target_type" "AuctionTargetType" NOT NULL,
ALTER COLUMN "title" DROP DEFAULT;

-- AlterTable
ALTER TABLE "AuctionSlot" ADD COLUMN     "current_bid" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "winner_id",
ADD COLUMN     "access_type" "RaceAccessType" NOT NULL DEFAULT 'PUBLIC',
ADD COLUMN     "prize_type" "PrizeType" NOT NULL,
ADD COLUMN     "source" "RaceSource" NOT NULL DEFAULT 'MANUAL',
ADD COLUMN     "template_id" INTEGER,
ADD COLUMN     "winner_acc_id" INTEGER;

-- AlterTable
ALTER TABLE "RaceParticipant" ADD COLUMN     "position" INTEGER,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE "marketplace_items" ADD COLUMN     "boost_until" TIMESTAMP(3),
ADD COLUMN     "is_boosted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "reports" DROP COLUMN "evidence_id";

-- CreateTable
CREATE TABLE "report_evidences" (
    "id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "tg_file_id" TEXT NOT NULL,
    "file_type" "EvidenceFileType" NOT NULL DEFAULT 'PHOTO',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "report_evidences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaceTemplate" (
    "id" SERIAL NOT NULL,
    "day_of_week" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "location_id" INTEGER NOT NULL,
    "prize" TEXT NOT NULL,
    "prize_type" "PrizeType" NOT NULL,
    "access_type" "RaceAccessType" NOT NULL DEFAULT 'PUBLIC',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RaceTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Race_template_id_start_at_idx" ON "Race"("template_id", "start_at");

-- CreateIndex
CREATE INDEX "Race_status_start_at_idx" ON "Race"("status", "start_at");

-- CreateIndex
CREATE UNIQUE INDEX "Race_template_id_start_at_key" ON "Race"("template_id", "start_at");

-- CreateIndex
CREATE UNIQUE INDEX "RaceParticipant_race_id_user_id_key" ON "RaceParticipant"("race_id", "user_id");

-- CreateIndex
CREATE INDEX "marketplace_items_is_boosted_boost_until_idx" ON "marketplace_items"("is_boosted", "boost_until");

-- AddForeignKey
ALTER TABLE "report_evidences" ADD CONSTRAINT "report_evidences_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "RaceTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_winner_acc_id_fkey" FOREIGN KEY ("winner_acc_id") REFERENCES "GameAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceTemplate" ADD CONSTRAINT "RaceTemplate_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceParticipant" ADD CONSTRAINT "RaceParticipant_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
