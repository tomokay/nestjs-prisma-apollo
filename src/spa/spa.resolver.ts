import { PrismaService } from '../prisma.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Spa } from 'src/spa/spa.model';

@Resolver(() => Spa)
export class SpaResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Spa])
  async spa() {
    return this.prisma.spa.findMany();
  }

  @Mutation(() => Spa)
  async createSpa(
    @Args('spaName') spaName: string,
    @Args('adress') address: string,
    @Args('phoneNumber') phoneNumber: string,
    @Args('businessHours') businessHours: string,
    @Args('regularHoliday') regularHoliday: string,
    @Args('adultPrice') adultPrice: number,
    @Args('childPrice') childPrice: number,
    @Args('adultWeekendPrice') adultWeekendPrice: number,
    @Args('childWeekendPrice') childWeekendPrice: number,
    @Args('hasFreeShampoo') hasFreeShampoo: boolean,
    @Args('hasPaidShampoo') hasPaidShampoo: boolean,
    @Args('hasTowel') hasTowel: boolean,
    @Args('hasFreeHairdryer') hasFreeHairdryer: boolean,
    @Args('hasPaidHairdryer') hasPaidHairdryer: boolean,
    @Args('hasCreditCard') hasCreditCard: boolean,
    @Args('hasOpenAirBath') hasOpenAirBath: boolean,
    @Args('hasWaterBath') hasWaterBath: boolean,
    @Args('hasSauna') hasSauna: boolean,
    @Args('hasBubbleBath') hasBubbleBath: boolean,
    @Args('hasWhirpool') hasJetBathSpa: boolean,
    @Args('hasShoulderHittingShower') hasShoulderHittingShower: boolean,
    @Args('hasSleepingBath') hasSleepingBath: boolean,
    @Args('hasCypressBath') hasCypressBath: boolean,
    @Args('hasBedrockBath') hasBedrockBath: boolean,
    @Args('hasElectricBath') hasElectricBath: boolean,
    @Args('hasFamilyBath') hasFamilyBath: boolean,
    @Args('customSpa') customSpa: string | null,
    @Args('hasRestaurant') hasRestaurant: boolean,
    @Args('hasBreakPlace') hasBreakPlace: boolean,
    @Args('hasMassageMachine') hasMassageMachine: boolean,
    @Args('hasVendingMachine') hasVendingMachine: boolean,
    @Args('hasStore') hasStore: boolean,
    @Args('customFacilities') customFacilities: string | null,
    @Args('picture') picture: string,
    @Args('goodCount') goodCount: number,
    @Args('lat') lat: number,
    @Args('lng') lng: number,
  ) {
    return this.prisma.spa.create({
      data: {
        spaName,
        address,
        phoneNumber,
        businessHours,
        regularHoliday,
        adultPrice,
        childPrice,
        adultWeekendPrice,
        childWeekendPrice,
        hasFreeShampoo,
        hasPaidShampoo,
        hasTowel,
        hasFreeHairdryer,
        hasPaidHairdryer,
        hasCreditCard,
        hasOpenAirBath,
        hasWaterBath,
        hasSauna,
        hasBubbleBath,
        hasJetBathSpa,
        hasShoulderHittingShower,
        hasSleepingBath,
        hasCypressBath,
        hasBedrockBath,
        hasElectricBath,
        hasFamilyBath,
        customSpa,
        hasRestaurant,
        hasBreakPlace,
        hasMassageMachine,
        hasVendingMachine,
        hasStore,
        customFacilities,
        picture,
        goodCount,
        lat,
        lng,
      },
    });
  }
}
