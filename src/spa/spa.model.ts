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
  customFacility?: string;
}

@ObjectType()
export class SpaModel {
  @Field(() => ID)
  id: number;

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

  @Field((type) => Int)
  adultPrice: number;

  @Field((type) => Int)
  childPrice: number;

  @Field((type) => Int)
  adultWeekendPrice: number;

  @Field((type) => Int)
  childWeekendPrice: number;

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
  customFacility?: string;

  @Field(() => String)
  picture: string;

  @Field((type) => String)
  lat: string;

  @Field((type) => String)
  lng: string;
}

@ObjectType()
export class SpaList {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  spaName: string;

  @Field(() => String)
  address: string;

  @Field((type) => String, { nullable: true })
  picture: string;
}

@ObjectType()
export class Spa {
  @Field((type) => ID, { nullable: true })
  id: number;

  @Field((type) => Basic, { nullable: true })
  basic: Basic;

  @Field((type) => Price, { nullable: true })
  price: Price;

  @Field((type) => Amenity, { nullable: true })
  amenity: Amenity;

  @Field((type) => SpaFacility, { nullable: true })
  spaFacility: SpaFacility;

  @Field((type) => AnotherFacility, { nullable: true })
  anotherFacility: AnotherFacility;

  @Field((type) => String, { nullable: true })
  picture: string;

  @Field((type) => String, { nullable: true })
  lat: string;

  @Field((type) => String, { nullable: true })
  lng: string;
}

@InputType()
export class InputBasic {
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

@InputType()
export class InputPrice {
  @Field((type) => Int)
  adultPrice: number;

  @Field((type) => Int)
  childPrice: number;

  @Field((type) => Int)
  adultWeekendPrice: number;

  @Field((type) => Int)
  childWeekendPrice: number;
}

@InputType()
export class InputAmenity {
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

@InputType()
export class InputSpaFacility {
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
@InputType()
export class InputAnotherFacility {
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
  customFacility?: string;
}

@InputType()
export class AddSpaInput {
  @Field((type) => InputBasic)
  basic: InputBasic;

  @Field((type) => InputPrice)
  price: InputPrice;

  @Field((type) => InputAmenity)
  amenity: InputAmenity;

  @Field((type) => InputSpaFacility)
  spaFacility: InputSpaFacility;

  @Field((type) => InputAnotherFacility)
  anotherFacility: InputAnotherFacility;

  @Field((type) => String)
  picture: string;

  @Field((type) => String)
  lat: string;

  @Field((type) => String)
  lng: string;
}

@InputType()
export class UpdateSpaInput {
  @Field(() => ID)
  id: number;

  @Field((type) => InputBasic)
  basic: InputBasic;

  @Field((type) => InputPrice)
  price: InputPrice;

  @Field((type) => InputAmenity)
  amenity: InputAmenity;

  @Field((type) => InputSpaFacility)
  spaFacility: InputSpaFacility;

  @Field((type) => InputAnotherFacility)
  anotherFacility: InputAnotherFacility;

  @Field((type) => String)
  picture: string;

  @Field((type) => String)
  lat: string;

  @Field((type) => String)
  lng: string;
}

@InputType()
export class DeleteSpaInput {
  @Field(() => ID)
  id?: number;
}
