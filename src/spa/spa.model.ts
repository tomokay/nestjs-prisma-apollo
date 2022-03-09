import { Field, ID, ObjectType, InputType, Int } from '@nestjs/graphql';

@ObjectType()
export class Basic {
  @Field(() => String)
  spaName: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  businessHours: string;

  @Field(() => String)
  regularHoliday: string;
}

@ObjectType()
export class Price {
  @Field((type) => Int)
  adultPrice: number;

  @Field((type) => Int)
  childPrice: number;

  @Field((type) => Int)
  adultWeekendPrice: number;

  @Field((type) => Int)
  childWeekendPrice: number;
}

@ObjectType()
export class Amenity {
  @Field(() => Boolean)
  hasFreeShampoo: boolean;

  @Field(() => Boolean)
  hasPaidShampoo: boolean;

  @Field(() => Boolean)
  hasTowel: boolean;

  @Field(() => Boolean)
  hasFreeHairdryer: boolean;

  @Field(() => Boolean)
  hasPaidHairdryer: boolean;

  @Field(() => Boolean)
  hasCreditCard: boolean;
}

@ObjectType()
export class SpaFacility {
  @Field(() => Boolean)
  hasOpenAirBath: boolean;

  @Field(() => Boolean)
  hasWaterBath: boolean;

  @Field(() => Boolean)
  hasSauna: boolean;

  @Field(() => Boolean)
  hasBubbleBath: boolean;

  @Field(() => Boolean)
  hasJetBathSpa: boolean;

  @Field(() => Boolean)
  hasShoulderHittingShower: boolean;

  @Field(() => Boolean)
  hasSleepingBath: boolean;

  @Field(() => Boolean)
  hasCypressBath: boolean;

  @Field(() => Boolean)
  hasBedrockBath: boolean;

  @Field(() => Boolean)
  hasElectricBath: boolean;

  @Field(() => Boolean)
  hasFamilyBath: boolean;

  @Field({ nullable: true })
  customSpa?: string;
}

@ObjectType()
export class AnotherFacility {
  @Field(() => Boolean)
  hasRestaurant: boolean;

  @Field(() => Boolean)
  hasBreakPlace: boolean;

  @Field(() => Boolean)
  hasMassageMachine: boolean;

  @Field(() => Boolean)
  hasVendingMachine: boolean;

  @Field(() => Boolean)
  hasStore: boolean;

  @Field({ nullable: true })
  customFacilities?: string;
}

@ObjectType()
export class Spa {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  picture: string;

  @Field((type) => Int)
  goodCount: number;

  @Field((type) => Int)
  lat: number;

  @Field((type) => Int)
  lng: number;
}

@InputType()
export class AddSpaInput {
  @Field(() => ID)
  id: number;

  @Field((type) => [Basic])
  basic: {
    spaName: string;
    address: string;
    phoneNumber: string;
    businessHours: string;
    regularHoliday: string;
  };

  @Field((type) => [Price])
  price: {
    adultPrice: number;
    childPrice: number;
    adultWeekendPrice: number;
    childWeekendPrice: number;
  };

  @Field((type) => [Amenity])
  amenity: {
    hasFreeShampoo: boolean;
    hasPaidShampoo: boolean;
    hasTowel: boolean;
    hasFreeHairdryer: boolean;
    hasPaidHairdryer: boolean;
    hasCreditCard: boolean;
  };

  @Field((type) => [SpaFacility])
  spaFacility: {
    hasOpenAirBath: boolean;
    hasWaterBath: boolean;
    hasSauna: boolean;
    hasBubbleBath: boolean;
    hasJetBathSpa: boolean;
    hasShoulderHittingShower: boolean;
    hasSleepingBath: boolean;
    hasCypressBath: boolean;
    hasBedrockBath: boolean;
    hasElectricBath: boolean;
    hasFamilyBath: boolean;
    customSpa?: string;
  };

  @Field((type) => [AnotherFacility])
  anotherFacility: {
    hasRestaurant: boolean;
    hasBreakPlace: boolean;
    hasMassageMachine: boolean;
    hasVendingMachine: boolean;
    hasStore: boolean;
    customFacilities?: string;
  };

  @Field((type) => String)
  picture: string;

  @Field((type) => Int)
  goodCount: number;

  @Field((type) => Int)
  lat: number;

  @Field((type) => Int)
  lng: number;
}
