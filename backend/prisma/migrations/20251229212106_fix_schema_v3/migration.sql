/*
  Warnings:

  - You are about to drop the column `posOneX` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `posOneY` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `posOnez` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `posTwoX` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `posTwoY` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `posTwoZ` on the `Location` table. All the data in the column will be lost.
  - Added the required column `pos_one_x` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pos_one_y` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pos_one_z` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pos_two_x` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pos_two_y` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pos_two_z` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "posOneX",
DROP COLUMN "posOneY",
DROP COLUMN "posOnez",
DROP COLUMN "posTwoX",
DROP COLUMN "posTwoY",
DROP COLUMN "posTwoZ",
ADD COLUMN     "pos_one_x" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "pos_one_y" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "pos_one_z" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "pos_two_x" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "pos_two_y" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "pos_two_z" DOUBLE PRECISION NOT NULL;
