/*
  Warnings:

  - You are about to drop the column `location` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `server_number` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `is_vip` on the `User` table. All the data in the column will be lost.
  - Added the required column `location_id` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" DROP COLUMN "location",
DROP COLUMN "server_number",
ADD COLUMN     "location_id" INTEGER NOT NULL,
ADD COLUMN     "prize_amount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_vip",
ADD COLUMN     "vip_expires_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "file_id" TEXT NOT NULL,
    "posOneX" DOUBLE PRECISION NOT NULL,
    "posOneY" DOUBLE PRECISION NOT NULL,
    "posOnez" DOUBLE PRECISION NOT NULL,
    "posTwox" DOUBLE PRECISION NOT NULL,
    "posTwoy" DOUBLE PRECISION NOT NULL,
    "posTwoz" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
