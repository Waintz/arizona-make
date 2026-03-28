-- DropForeignKey
ALTER TABLE "Race" DROP CONSTRAINT "Race_winner_id_fkey";

-- AlterTable
ALTER TABLE "GameAccount" ADD COLUMN     "wins" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_winner_id_fkey" FOREIGN KEY ("winner_id") REFERENCES "GameAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
