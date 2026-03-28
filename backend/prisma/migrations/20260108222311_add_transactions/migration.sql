-- CreateTable
CREATE TABLE "Transactions" (
    "id" SERIAL NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_hash_key" ON "Transactions"("hash");
