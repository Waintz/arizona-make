/*
  Warnings:

  - You are about to drop the column `buyer_notified_contact` on the `marketplace_deals` table. All the data in the column will be lost.
  - You are about to drop the column `contact_deadline` on the `marketplace_deals` table. All the data in the column will be lost.
  - You are about to drop the column `deal_deadline` on the `marketplace_deals` table. All the data in the column will be lost.
  - You are about to drop the column `seller_notified_contact` on the `marketplace_deals` table. All the data in the column will be lost.
  - Added the required column `buyer_contact_deadline` to the `marketplace_deals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seller_action_deadline` to the `marketplace_deals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "marketplace_deals" DROP COLUMN "buyer_notified_contact",
DROP COLUMN "contact_deadline",
DROP COLUMN "deal_deadline",
DROP COLUMN "seller_notified_contact",
ADD COLUMN     "buyer_confirmed_contact" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "buyer_contact_deadline" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "buyer_wants_to_close" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "seller_action_deadline" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "seller_confirmed_contact" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "seller_wants_to_close" BOOLEAN NOT NULL DEFAULT false;
