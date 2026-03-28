/*
  Warnings:

  - You are about to drop the column `is_finished` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `prize_amount` on the `Race` table. All the data in the column will be lost.
  - Added the required column `prize` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" DROP COLUMN "is_finished",
DROP COLUMN "prize_amount",
ADD COLUMN     "prize" TEXT NOT NULL,
ADD COLUMN     "status" "RaceStatus" NOT NULL DEFAULT 'WAITING';
