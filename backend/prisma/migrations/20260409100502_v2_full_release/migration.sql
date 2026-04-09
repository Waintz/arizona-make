/*
  Warnings:

  - You are about to drop the column `wins` on the `GameAccount` table. All the data in the column will be lost.
  - You are about to drop the column `is_vip` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `server_start_time` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `client_time_ms` on the `RaceParticipant` table. All the data in the column will be lost.
  - You are about to drop the column `suspicion_reason` on the `RaceParticipant` table. All the data in the column will be lost.
  - You are about to drop the column `client_timestamp` on the `RaceTelemetry` table. All the data in the column will be lost.
  - You are about to drop the column `x` on the `RaceTelemetry` table. All the data in the column will be lost.
  - You are about to drop the column `y` on the `RaceTelemetry` table. All the data in the column will be lost.
  - You are about to drop the column `z` on the `RaceTelemetry` table. All the data in the column will be lost.
  - You are about to drop the column `connect_code` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `connect_code_expires_at` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `balance` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `frozen_balance` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to drop the column `currency` on the `UserSettings` table. All the data in the column will be lost.
  - You are about to drop the column `is_stealth` on the `UserSettings` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `UserSettings` table. All the data in the column will be lost.
  - You are about to drop the column `notify_news` on the `UserSettings` table. All the data in the column will be lost.
  - You are about to drop the column `notify_payments` on the `UserSettings` table. All the data in the column will be lost.
  - You are about to drop the column `timezone` on the `UserSettings` table. All the data in the column will be lost.
  - You are about to drop the `PromoCode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RaceWitness` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WithdrawalRequest` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[participant_id]` on the table `RaceTelemetry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "CarStatus" AS ENUM ('FOR_SALE', 'TRADING', 'SOLD', 'EXPIRED');

-- CreateEnum
CREATE TYPE "CarRarity" AS ENUM ('LEGENDARY', 'RARE', 'JUNK');

-- CreateEnum
CREATE TYPE "OilStatus" AS ENUM ('GOOD', 'MEDIUM', 'BAD');

-- CreateEnum
CREATE TYPE "DealStatus" AS ENUM ('PENDING', 'BUYER_CONTACTED', 'WAITING_FOR_FINISH', 'COMPLETED', 'CANCELLED', 'CLOSED_WITH_PENALTY');

-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('OPEN', 'UNDER_REVIEW', 'RESOLVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "VerificationCodeType" AS ENUM ('WEB_LOGIN', 'PASSWORD_RESET', 'GAME_LOGIN');

-- CreateEnum
CREATE TYPE "AuctionStatus" AS ENUM ('CREATED', 'OPEN', 'FINISHED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "SlotType" AS ENUM ('OPEN', 'CLOSED', 'LUCKY');

-- CreateEnum
CREATE TYPE "RaceType" AS ENUM ('FREE', 'PAID');

-- CreateEnum
CREATE TYPE "DisqualificationReason" AS ENUM ('NOT_IN_START_ZONE', 'CHEATING_SUSPECT', 'TELEPORT', 'SPEEDHACK');

-- DropForeignKey
ALTER TABLE "PromoCode" DROP CONSTRAINT "PromoCode_user_id_fkey";

-- DropForeignKey
ALTER TABLE "RaceWitness" DROP CONSTRAINT "RaceWitness_observer_id_fkey";

-- DropForeignKey
ALTER TABLE "RaceWitness" DROP CONSTRAINT "RaceWitness_race_id_fkey";

-- DropForeignKey
ALTER TABLE "RaceWitness" DROP CONSTRAINT "RaceWitness_suspect_nickname_suspect_server_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "WithdrawalRequest" DROP CONSTRAINT "WithdrawalRequest_user_id_fkey";

-- DropIndex
DROP INDEX "User_connect_code_key";

-- AlterTable
ALTER TABLE "GameAccount" DROP COLUMN "wins";

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "is_vip",
DROP COLUMN "server_start_time",
ADD COLUMN     "winner_user_id" INTEGER;

-- AlterTable
ALTER TABLE "RaceParticipant" DROP COLUMN "client_time_ms",
DROP COLUMN "suspicion_reason",
ADD COLUMN     "disqualified_at" TIMESTAMP(3),
ADD COLUMN     "dq_reason" "DisqualificationReason";

-- AlterTable
ALTER TABLE "RaceTelemetry" DROP COLUMN "client_timestamp",
DROP COLUMN "x",
DROP COLUMN "y",
DROP COLUMN "z",
ADD COLUMN     "raw_path" JSONB;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "connect_code",
DROP COLUMN "connect_code_expires_at",
ADD COLUMN     "ban_reason" TEXT,
ADD COLUMN     "banned_until" TIMESTAMP(3),
ADD COLUMN     "frozen_points" BIGINT NOT NULL DEFAULT 0,
ADD COLUMN     "points" BIGINT NOT NULL DEFAULT 0,
ADD COLUMN     "reputation" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "token_version" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "balance" SET DEFAULT 0,
ALTER COLUMN "balance" SET DATA TYPE BIGINT,
ALTER COLUMN "frozen_balance" SET DEFAULT 0,
ALTER COLUMN "frozen_balance" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "UserSettings" DROP COLUMN "currency",
DROP COLUMN "is_stealth",
DROP COLUMN "language",
DROP COLUMN "notify_news",
DROP COLUMN "notify_payments",
DROP COLUMN "timezone";

-- DropTable
DROP TABLE "PromoCode";

-- DropTable
DROP TABLE "RaceWitness";

-- DropTable
DROP TABLE "Transactions";

-- DropTable
DROP TABLE "WithdrawalRequest";

-- DropEnum
DROP TYPE "PaymentStatus";

-- DropEnum
DROP TYPE "PromoType";

-- DropEnum
DROP TYPE "WithdrawalStatus";

-- CreateTable
CREATE TABLE "VerificationCodes" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "type" "VerificationCodeType" NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationCodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tokens" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarListing" (
    "id" SERIAL NOT NULL,
    "seller_id" INTEGER NOT NULL,
    "account_id" INTEGER NOT NULL,
    "model_id" INTEGER NOT NULL,
    "model_name" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "rarity" "CarRarity" NOT NULL DEFAULT 'JUNK',
    "rarity_num" INTEGER NOT NULL,
    "plate_number" TEXT,
    "mileage" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "oil_status" "OilStatus" NOT NULL DEFAULT 'GOOD',
    "condition" INTEGER NOT NULL DEFAULT 100,
    "has_launch" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "image_id" TEXT,
    "is_negotiable" BOOLEAN NOT NULL DEFAULT false,
    "is_vice_city" BOOLEAN NOT NULL DEFAULT false,
    "status" "CarStatus" NOT NULL DEFAULT 'FOR_SALE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarDeal" (
    "id" SERIAL NOT NULL,
    "listing_id" INTEGER NOT NULL,
    "buyer_id" INTEGER NOT NULL,
    "seller_notified_contact" BOOLEAN NOT NULL DEFAULT false,
    "buyer_notified_contact" BOOLEAN NOT NULL DEFAULT false,
    "seller_confirmed_deal" BOOLEAN NOT NULL DEFAULT false,
    "buyer_confirmed_deal" BOOLEAN NOT NULL DEFAULT false,
    "status" "DealStatus" NOT NULL DEFAULT 'PENDING',
    "contact_deadline" TIMESTAMP(3) NOT NULL,
    "deal_deadline" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarDeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "reporter_id" INTEGER NOT NULL,
    "target_id" INTEGER NOT NULL,
    "deal_id" INTEGER,
    "reason" TEXT NOT NULL,
    "evidence_id" TEXT,
    "status" "ReportStatus" NOT NULL DEFAULT 'OPEN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auction" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'ГРАН-ПРИ [ЛОКАЦИЯ]',
    "status" "AuctionStatus" NOT NULL DEFAULT 'CREATED',
    "race_id" INTEGER,
    "start_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,
    "min_bid_step" INTEGER NOT NULL DEFAULT 5,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Auction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuctionSlot" (
    "id" SERIAL NOT NULL,
    "auction_id" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "type" "SlotType" NOT NULL DEFAULT 'CLOSED',
    "winner_id" INTEGER,

    CONSTRAINT "AuctionSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuctionBid" (
    "id" SERIAL NOT NULL,
    "auction_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "slot_number" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuctionBid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaceBet" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "race_id" INTEGER NOT NULL,
    "target_acc_id" INTEGER NOT NULL,
    "amount" BIGINT NOT NULL,
    "is_win" BOOLEAN,
    "payout_amount" BIGINT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RaceBet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VerificationCodes_user_id_code_idx" ON "VerificationCodes"("user_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "Tokens_user_id_key" ON "Tokens"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tokens_refresh_token_key" ON "Tokens"("refresh_token");

-- CreateIndex
CREATE INDEX "CarListing_rarity_rarity_num_idx" ON "CarListing"("rarity", "rarity_num");

-- CreateIndex
CREATE UNIQUE INDEX "CarDeal_listing_id_key" ON "CarDeal"("listing_id");

-- CreateIndex
CREATE UNIQUE INDEX "Auction_race_id_key" ON "Auction"("race_id");

-- CreateIndex
CREATE UNIQUE INDEX "AuctionSlot_auction_id_number_key" ON "AuctionSlot"("auction_id", "number");

-- CreateIndex
CREATE INDEX "AuctionBid_auction_id_slot_number_amount_idx" ON "AuctionBid"("auction_id", "slot_number", "amount");

-- CreateIndex
CREATE INDEX "RaceBet_race_id_target_acc_id_idx" ON "RaceBet"("race_id", "target_acc_id");

-- CreateIndex
CREATE UNIQUE INDEX "RaceTelemetry_participant_id_key" ON "RaceTelemetry"("participant_id");

-- AddForeignKey
ALTER TABLE "VerificationCodes" ADD CONSTRAINT "VerificationCodes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_winner_user_id_fkey" FOREIGN KEY ("winner_user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tokens" ADD CONSTRAINT "Tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarListing" ADD CONSTRAINT "CarListing_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarListing" ADD CONSTRAINT "CarListing_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "GameAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarDeal" ADD CONSTRAINT "CarDeal_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "CarListing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarDeal" ADD CONSTRAINT "CarDeal_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reporter_id_fkey" FOREIGN KEY ("reporter_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auction" ADD CONSTRAINT "Auction_race_id_fkey" FOREIGN KEY ("race_id") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuctionSlot" ADD CONSTRAINT "AuctionSlot_auction_id_fkey" FOREIGN KEY ("auction_id") REFERENCES "Auction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuctionSlot" ADD CONSTRAINT "AuctionSlot_winner_id_fkey" FOREIGN KEY ("winner_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuctionBid" ADD CONSTRAINT "AuctionBid_auction_id_fkey" FOREIGN KEY ("auction_id") REFERENCES "Auction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuctionBid" ADD CONSTRAINT "AuctionBid_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceBet" ADD CONSTRAINT "RaceBet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceBet" ADD CONSTRAINT "RaceBet_race_id_fkey" FOREIGN KEY ("race_id") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceBet" ADD CONSTRAINT "RaceBet_target_acc_id_fkey" FOREIGN KEY ("target_acc_id") REFERENCES "GameAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
