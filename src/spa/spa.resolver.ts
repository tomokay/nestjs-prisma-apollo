import { PrismaService } from '../prisma.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddSpaInput, Spa } from 'src/spa/spa.model';

@Resolver(() => Spa)
export class SpaResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Spa])
  async spa() {
    return this.prisma.spa.findMany();
  }

  @Mutation((returns) => [Spa])
  async createSpa(
    @Args({ name: 'input', type: () => [AddSpaInput] })
    input: AddSpaInput,
  ) {
    console.log(input);
    // return this.prisma.spa.create;
    // ({
    // data: {
    //     spaName,
    //     address,
    //     phoneNumber,
    //     businessHours,
    //     regularHoliday,
    //     adultPrice,
    //     childPrice,
    //     adultWeekendPrice,
    //     childWeekendPrice,
    //     hasFreeShampoo,
    //     hasPaidShampoo,
    //     hasTowel,
    //     hasFreeHairdryer,
    //     hasPaidHairdryer,
    //     hasCreditCard,
    //     hasOpenAirBath,
    //     hasWaterBath,
    //     hasSauna,
    //     hasBubbleBath,
    //     hasJetBathSpa,
    //     hasShoulderHittingShower,
    //     hasSleepingBath,
    //     hasCypressBath,
    //     hasBedrockBath,
    //     hasElectricBath,
    //     hasFamilyBath,
    //     customSpa,
    //     hasRestaurant,
    //     hasBreakPlace,
    //     hasMassageMachine,
    //     hasVendingMachine,
    //     hasStore,
    //     customFacilities,
    //     picture,
    //     goodCount,
    //     lat,
    //     lng,
    // },
    // });
  }
}
