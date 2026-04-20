/*
  Warnings:

  - You are about to drop the `CarDeal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarListing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ListingStatus" AS ENUM ('FOR_SALE', 'TRADING', 'SOLD', 'EXPIRED');

-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('CAR', 'HOUSE', 'BUSINESS');

-- DropForeignKey
ALTER TABLE "CarDeal" DROP CONSTRAINT "CarDeal_buyer_id_fkey";

-- DropForeignKey
ALTER TABLE "CarDeal" DROP CONSTRAINT "CarDeal_listing_id_fkey";

-- DropForeignKey
ALTER TABLE "CarListing" DROP CONSTRAINT "CarListing_account_id_fkey";

-- DropForeignKey
ALTER TABLE "CarListing" DROP CONSTRAINT "CarListing_seller_id_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_reporter_id_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_target_id_fkey";

-- DropTable
DROP TABLE "CarDeal";

-- DropTable
DROP TABLE "CarListing";

-- DropTable
DROP TABLE "Report";

-- DropEnum
DROP TYPE "CarStatus";

-- CreateTable
CREATE TABLE "marketplace_items" (
    "id" SERIAL NOT NULL,
    "entity_type" "EntityType" NOT NULL,
    "seller_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "server" INTEGER NOT NULL,
    "description" TEXT,
    "status" "ListingStatus" NOT NULL DEFAULT 'FOR_SALE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "marketplace_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_listings_details" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "account_id" INTEGER NOT NULL,
    "model_id" INTEGER NOT NULL,
    "rarity" "CarRarity" NOT NULL DEFAULT 'JUNK',
    "rarity_num" INTEGER NOT NULL DEFAULT 0,
    "plate_number" TEXT,
    "mileage" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "oil_status" "OilStatus" NOT NULL DEFAULT 'GOOD',
    "condition" INTEGER NOT NULL DEFAULT 100,
    "has_launch" BOOLEAN NOT NULL DEFAULT false,
    "image_id" TEXT,
    "is_negotiable" BOOLEAN NOT NULL DEFAULT false,
    "is_vice_city" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "car_listings_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "house_listings_details" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "house_number" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "has_garage" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "house_listings_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketplace_deals" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "buyer_id" INTEGER NOT NULL,
    "seller_notified_contact" BOOLEAN NOT NULL DEFAULT false,
    "buyer_notified_contact" BOOLEAN NOT NULL DEFAULT false,
    "seller_confirmed_deal" BOOLEAN NOT NULL DEFAULT false,
    "buyer_confirmed_deal" BOOLEAN NOT NULL DEFAULT false,
    "status" "DealStatus" NOT NULL DEFAULT 'PENDING',
    "contact_deadline" TIMESTAMP(3) NOT NULL,
    "deal_deadline" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "marketplace_deals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" SERIAL NOT NULL,
    "reporter_id" INTEGER NOT NULL,
    "target_id" INTEGER NOT NULL,
    "deal_id" INTEGER,
    "reason" TEXT NOT NULL,
    "evidence_id" TEXT,
    "status" "ReportStatus" NOT NULL DEFAULT 'OPEN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "marketplace_items_entity_type_server_price_idx" ON "marketplace_items"("entity_type", "server", "price");

-- CreateIndex
CREATE UNIQUE INDEX "car_listings_details_item_id_key" ON "car_listings_details"("item_id");

-- CreateIndex
CREATE INDEX "car_listings_details_rarity_rarity_num_idx" ON "car_listings_details"("rarity", "rarity_num");

-- CreateIndex
CREATE UNIQUE INDEX "house_listings_details_item_id_key" ON "house_listings_details"("item_id");

-- CreateIndex
CREATE UNIQUE INDEX "marketplace_deals_item_id_key" ON "marketplace_deals"("item_id");

-- AddForeignKey
ALTER TABLE "marketplace_items" ADD CONSTRAINT "marketplace_items_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_listings_details" ADD CONSTRAINT "car_listings_details_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "marketplace_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_listings_details" ADD CONSTRAINT "car_listings_details_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "GameAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "house_listings_details" ADD CONSTRAINT "house_listings_details_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "marketplace_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketplace_deals" ADD CONSTRAINT "marketplace_deals_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "marketplace_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketplace_deals" ADD CONSTRAINT "marketplace_deals_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_reporter_id_fkey" FOREIGN KEY ("reporter_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "marketplace_deals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
