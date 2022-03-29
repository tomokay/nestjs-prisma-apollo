import { validateCreateSpaInput } from 'src/lib/createValidation';
import { Spa, PrismaClient } from '@prisma/client';
import { AddSpaInput } from 'src/spa/spa.model';

const prisma = new PrismaClient();

export const createSpaInput = async (input: AddSpaInput): Promise<Spa> => {
  validateCreateSpaInput(
    input.basic,
    input.price,
    input.spaFacility.customSpa,
    input.anotherFacility.customFacility,
  );
  const createSpaInputResult = prisma.spa.create({
    data: {
      spaName: input.basic.spaName,
      address: input.basic.address,
      phoneNumber: input.basic.phoneNumber,
      businessHours: input.basic.businessHours,
      regularHoliday: input.basic.regularHoliday,
      adultPrice: input.price.adultPrice,
      childPrice: input.price.childPrice,
      adultWeekendPrice: input.price.adultWeekendPrice,
      childWeekendPrice: input.price.childWeekendPrice,
      hasFreeShampoo: input.amenity.hasFreeShampoo,
      hasPaidShampoo: input.amenity.hasPaidShampoo,
      hasTowel: input.amenity.hasTowel,
      hasFreeHairdryer: input.amenity.hasFreeHairdryer,
      hasPaidHairdryer: input.amenity.hasPaidHairdryer,
      hasCreditCard: input.amenity.hasCreditCard,
      hasOpenAirBath: input.spaFacility.hasOpenAirBath,
      hasWaterBath: input.spaFacility.hasWaterBath,
      hasSauna: input.spaFacility.hasSauna,
      hasBubbleBath: input.spaFacility.hasBubbleBath,
      hasJetBathSpa: input.spaFacility.hasJetBathSpa,
      hasShoulderHittingShower: input.spaFacility.hasShoulderHittingShower,
      hasSleepingBath: input.spaFacility.hasSleepingBath,
      hasCypressBath: input.spaFacility.hasCypressBath,
      hasBedrockBath: input.spaFacility.hasBedrockBath,
      hasElectricBath: input.spaFacility.hasElectricBath,
      hasFamilyBath: input.spaFacility.hasFamilyBath,
      customSpa: input.spaFacility.customSpa,
      hasRestaurant: input.anotherFacility.hasRestaurant,
      hasBreakPlace: input.anotherFacility.hasBreakPlace,
      hasMassageMachine: input.anotherFacility.hasMassageMachine,
      hasVendingMachine: input.anotherFacility.hasVendingMachine,
      hasStore: input.anotherFacility.hasStore,
      customFacility: input.anotherFacility.customFacility,
      picture: input.picture,
      lat: input.lat,
      lng: input.lng,
    },
  });
  return createSpaInputResult;
};
