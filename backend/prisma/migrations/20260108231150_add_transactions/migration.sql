/*
  Warnings:

  - A unique constraint covering the columns `[comment]` on the table `Transactions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `comment` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_comment_key" ON "Transactions"("comment");
