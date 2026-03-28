/*
  Warnings:

  - You are about to drop the column `isVip` on the `Race` table. All the data in the column will be lost.
  - Added the required column `is_vip` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" DROP COLUMN "isVip",
ADD COLUMN     "is_vip" BOOLEAN NOT NULL;
