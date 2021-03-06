-- CreateTable
CREATE TABLE "Spa" (
    "id" SERIAL NOT NULL,
    "spaName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "businessHours" TEXT NOT NULL,
    "regularHoliday" TEXT NOT NULL,
    "adultPrice" INTEGER NOT NULL,
    "childPrice" INTEGER NOT NULL,
    "adultWeekendPrice" INTEGER NOT NULL,
    "childWeekendPrice" INTEGER NOT NULL,
    "hasFreeShampoo" BOOLEAN NOT NULL,
    "hasPaidShampoo" BOOLEAN NOT NULL,
    "hasTowel" BOOLEAN NOT NULL,
    "hasFreeHairdryer" BOOLEAN NOT NULL,
    "hasPaidHairdryer" BOOLEAN NOT NULL,
    "hasCreditCard" BOOLEAN NOT NULL,
    "hasOpenAirBath" BOOLEAN NOT NULL,
    "hasWaterBath" BOOLEAN NOT NULL,
    "hasSauna" BOOLEAN NOT NULL,
    "hasBubbleBath" BOOLEAN NOT NULL,
    "hasJetBathSpa" BOOLEAN NOT NULL,
    "hasShoulderHittingShower" BOOLEAN NOT NULL,
    "hasSleepingBath" BOOLEAN NOT NULL,
    "hasCypressBath" BOOLEAN NOT NULL,
    "hasBedrockBath" BOOLEAN NOT NULL,
    "hasElectricBath" BOOLEAN NOT NULL,
    "hasFamilyBath" BOOLEAN NOT NULL,
    "customSpa" TEXT,
    "hasRestaurant" BOOLEAN NOT NULL,
    "hasBreakPlace" BOOLEAN NOT NULL,
    "hasMassageMachine" BOOLEAN NOT NULL,
    "hasVendingMachine" BOOLEAN NOT NULL,
    "hasStore" BOOLEAN NOT NULL,
    "customFacilities" TEXT,
    "picture" TEXT NOT NULL,
    "goodCount" INTEGER NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Spa_pkey" PRIMARY KEY ("id")
);
