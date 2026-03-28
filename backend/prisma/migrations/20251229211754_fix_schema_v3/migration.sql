/*
  Warnings:

  - You are about to drop the column `posTwox` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `posTwoy` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `posTwoz` on the `Location` table. All the data in the column will be lost.
  - Added the required column `posTwoX` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posTwoY` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posTwoZ` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "posTwox",
DROP COLUMN "posTwoy",
DROP COLUMN "posTwoz",
ADD COLUMN     "posTwoX" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "posTwoY" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "posTwoZ" DOUBLE PRECISION NOT NULL;
