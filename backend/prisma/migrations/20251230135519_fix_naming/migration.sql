/*
  Warnings:

  - Added the required column `start_at` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "start_at" TIMESTAMP(3) NOT NULL;
