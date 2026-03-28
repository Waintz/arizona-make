/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `isFinished` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `secretCode` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `serverNumber` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `winnerId` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isVip` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `telegramId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[secret_code]` on the table `Race` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telegram_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[connect_code]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `secret_code` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `server_number` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telegram_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Race" DROP CONSTRAINT "Race_winnerId_fkey";

-- DropIndex
DROP INDEX "Race_secretCode_key";

-- DropIndex
DROP INDEX "User_telegramId_key";

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "createdAt",
DROP COLUMN "isFinished",
DROP COLUMN "secretCode",
DROP COLUMN "serverNumber",
DROP COLUMN "winnerId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_finished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "secret_code" TEXT NOT NULL,
ADD COLUMN     "server_number" INTEGER NOT NULL,
ADD COLUMN     "winner_id" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "isVip",
DROP COLUMN "telegramId",
ADD COLUMN     "connect_code" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_vip" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "telegram_id" BIGINT NOT NULL;

-- CreateTable
CREATE TABLE "GameAccount" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "server" INTEGER NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT true,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "GameAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameAccount_nickname_server_key" ON "GameAccount"("nickname", "server");

-- CreateIndex
CREATE UNIQUE INDEX "Race_secret_code_key" ON "Race"("secret_code");

-- CreateIndex
CREATE UNIQUE INDEX "User_telegram_id_key" ON "User"("telegram_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_connect_code_key" ON "User"("connect_code");

-- AddForeignKey
ALTER TABLE "GameAccount" ADD CONSTRAINT "GameAccount_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_winner_id_fkey" FOREIGN KEY ("winner_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
