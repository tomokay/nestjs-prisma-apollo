import { PrismaClient } from '@prisma/client';
import { UpdateSpaInput } from 'src/spa/spa.model';

const prisma = new PrismaClient();

export const updateSpaData = (update: UpdateSpaInput) => {
  return prisma.spa.update({
    where: { id: Number(update.id) },
    data: {
      spaName: update.basic.spaName,
      address: update.basic.address,
      phoneNumber: update.basic.phoneNumber,
      businessHours: update.basic.businessHours,
      regularHoliday: update.basic.regularHoliday,
      adultPrice: update.price.adultPrice,
      childPrice: update.price.childPrice,
      adultWeekendPrice: update.price.adultWeekendPrice,
      childWeekendPrice: update.price.childWeekendPrice,
      hasFreeShampoo: update.amenity.hasFreeShampoo,
      hasPaidShampoo: update.amenity.hasPaidShampoo,
      hasTowel: update.amenity.hasTowel,
      hasFreeHairdryer: update.amenity.hasFreeHairdryer,
      hasPaidHairdryer: update.amenity.hasPaidHairdryer,
      hasCreditCard: update.amenity.hasCreditCard,
      hasOpenAirBath: update.spaFacility.hasOpenAirBath,
      hasWaterBath: update.spaFacility.hasWaterBath,
      hasSauna: update.spaFacility.hasSauna,
      hasBubbleBath: update.spaFacility.hasBubbleBath,
      hasJetBathSpa: update.spaFacility.hasJetBathSpa,
      hasShoulderHittingShower: update.spaFacility.hasShoulderHittingShower,
      hasSleepingBath: update.spaFacility.hasSleepingBath,
      hasCypressBath: update.spaFacility.hasCypressBath,
      hasBedrockBath: update.spaFacility.hasBedrockBath,
      hasElectricBath: update.spaFacility.hasElectricBath,
      hasFamilyBath: update.spaFacility.hasFamilyBath,
      customSpa: update.spaFacility.customSpa,
      hasRestaurant: update.anotherFacility.hasRestaurant,
      hasBreakPlace: update.anotherFacility.hasBreakPlace,
      hasMassageMachine: update.anotherFacility.hasMassageMachine,
      hasVendingMachine: update.anotherFacility.hasVendingMachine,
      hasStore: update.anotherFacility.hasStore,
      customFacility: update.anotherFacility.customFacility,
      picture: update.picture,
      lat: update.lat,
      lng: update.lng,
    },
  });
};
