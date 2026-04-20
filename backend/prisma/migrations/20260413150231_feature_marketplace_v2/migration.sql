/*
  Warnings:

  - The values [BUYER_CONTACTED] on the enum `DealStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DealStatus_new" AS ENUM ('PENDING', 'WAITING_FOR_FINISH', 'COMPLETED', 'CANCELLED', 'CLOSED_WITH_PENALTY');
ALTER TABLE "public"."marketplace_deals" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "marketplace_deals" ALTER COLUMN "status" TYPE "DealStatus_new" USING ("status"::text::"DealStatus_new");
ALTER TYPE "DealStatus" RENAME TO "DealStatus_old";
ALTER TYPE "DealStatus_new" RENAME TO "DealStatus";
DROP TYPE "public"."DealStatus_old";
ALTER TABLE "marketplace_deals" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;
