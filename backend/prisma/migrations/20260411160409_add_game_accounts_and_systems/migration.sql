/*
  Warnings:

  - You are about to drop the column `verified` on the `GameAccount` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `VerificationCodes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[game_id,server]` on the table `GameAccount` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telegram_id]` on the table `VerificationCodes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `VerificationCodes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `game_id` to the `GameAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `GameAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telegram_id` to the `VerificationCodes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "VerificationCodes" DROP CONSTRAINT "VerificationCodes_user_id_fkey";

-- DropIndex
DROP INDEX "GameAccount_nickname_server_key";

-- DropIndex
DROP INDEX "VerificationCodes_user_id_code_idx";

-- AlterTable
ALTER TABLE "GameAccount" DROP COLUMN "verified",
ADD COLUMN     "game_id" INTEGER NOT NULL,
ADD COLUMN     "is_main" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "level" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "VerificationCodes" DROP COLUMN "user_id",
ADD COLUMN     "telegram_id" BIGINT NOT NULL;

-- CreateIndex
CREATE INDEX "GameAccount_user_id_idx" ON "GameAccount"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "GameAccount_game_id_server_key" ON "GameAccount"("game_id", "server");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationCodes_telegram_id_key" ON "VerificationCodes"("telegram_id");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationCodes_code_key" ON "VerificationCodes"("code");

-- AddForeignKey
ALTER TABLE "VerificationCodes" ADD CONSTRAINT "VerificationCodes_telegram_id_fkey" FOREIGN KEY ("telegram_id") REFERENCES "User"("telegram_id") ON DELETE RESTRICT ON UPDATE CASCADE;
