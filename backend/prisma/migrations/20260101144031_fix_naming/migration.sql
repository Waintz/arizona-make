/*
  Warnings:

  - Added the required column `isVip` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "isVip" BOOLEAN NOT NULL;
