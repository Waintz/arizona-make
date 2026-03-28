/*
  Warnings:

  - Added the required column `amount` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "status" "PaymentStatus" NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;
