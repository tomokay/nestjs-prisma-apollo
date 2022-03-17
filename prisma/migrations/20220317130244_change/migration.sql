/*
  Warnings:

  - You are about to drop the column `customFacilities` on the `Spa` table. All the data in the column will be lost.
  - You are about to drop the column `goodCount` on the `Spa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Spa" DROP COLUMN "customFacilities",
DROP COLUMN "goodCount",
ADD COLUMN     "customFacility" TEXT,
ALTER COLUMN "lat" SET DATA TYPE TEXT,
ALTER COLUMN "lng" SET DATA TYPE TEXT;
