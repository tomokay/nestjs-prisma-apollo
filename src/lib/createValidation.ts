const MAX_SPA_BASIC_LENGTH = 50;
const MAX_SPA_PHONE_NUMBER_LENGTH = 30;
const MAX_PRICE = 9999999;
const MAX_OPTIONAL_LENGTH = 50;

type basicInput = {
  spaName: string;
  address: string;
  phoneNumber: string;
  businessHours: string;
  regularHoliday: string;
};

type priceInput = {
  adultPrice: number;
  childPrice: number;
  adultWeekendPrice: number;
  childWeekendPrice: number;
};

/**
 * 新規登録のバリデーション関数
 * @param basicInput
 * @param priceInput
 * @param customSpa
 * @param customFacility
 */

export const validateCreateSpaInput = (
  basicInput: basicInput,
  priceInput: priceInput,
  customSpa: string,
  customFacility: string,
) => {
  validateBasic(basicInput);
  validatePrice(priceInput);
  validateCustom(customSpa, customFacility);
};

/**
 * 登録情報を編集するときのバリデーション関数
 * @param id
 * @param basicInput
 * @param priceInput
 * @param customSpa
 * @param customFacility
 */

export const validateUpdateSpaInput = (
  id: number,
  basicInput: basicInput,
  priceInput: priceInput,
  customSpa: string,
  customFacility: string,
) => {
  invaildSpaId(id);
  validateBasic(basicInput);
  validatePrice(priceInput);
  validateCustom(customSpa, customFacility);
};

/**
 *編集するspaのIDがあったらエラーを返す関数
 * @param id
 */

export const invaildSpaId = (id: number) => {
  if (id === undefined && 0) throw new Error(`Can't find Spa ID`);
};

/**
 * 基本情報のバリデーションのエラー情報を返す
 */

export const validateBasic = (basicInput: basicInput) => {
  const invaildSpaName = validateSpaName(basicInput.spaName);
  const invaildAdress = validateAddress(basicInput.address);
  const invaildPhoneNumber = validatePhoneNumber(basicInput.phoneNumber);
  const invaildBusinessHours = validateBusinessHours(basicInput.businessHours);
  const invaildRegularHoliday = validateRegularHoliday(
    basicInput.regularHoliday,
  );

  const errorMessages = createErrorMessages(
    [
      invaildSpaName,
      invaildAdress,
      invaildPhoneNumber,
      invaildBusinessHours,
      invaildRegularHoliday,
    ].filter((f) => f),
  );

  if (errorMessages.length !== 0) {
    throw new Error(
      `detected invalid data: detail: ${JSON.stringify(errorMessages)}`,
    );
  }
};

/**
 * 料金情報のバリデーションのエラーを返す関数
 */

export const validatePrice = (priceInput: priceInput) => {
  const invaildAdultPrice = validateAdultPrice(priceInput.adultPrice);
  const invaildChildPrice = validateChildPrice(priceInput.childPrice);
  const invaildAdultWeekendPrice = validateAdultWeekendPrice(
    priceInput.adultWeekendPrice,
  );
  const invaildChildWeekendPrice = validateChildWeekendPrice(
    priceInput.childWeekendPrice,
  );

  const errorMessages = createPriceErrorMessage(
    [
      invaildAdultPrice,
      invaildChildPrice,
      invaildAdultWeekendPrice,
      invaildChildWeekendPrice,
    ].filter((f) => f),
  );

  if (errorMessages.length !== 0) {
    throw new Error(
      `detected invalid data: detail: ${JSON.stringify(errorMessages)}`,
    );
  }
};

/**
 *任意情報のバリデーションのエラーを返す関数
 */

export const validateCustom = (customSpa: string, customFacility: string) => {
  const invaildcCustomSpa = validateCustomSpa(customSpa);
  const invaildCustomFacility = validateCustomFacility(customFacility);

  const errorMessages = createErrorMessages(
    [invaildcCustomSpa, invaildCustomFacility].filter((f) => f),
  );
  if (errorMessages.length !== 0) {
    throw new Error(
      `detected invalid data: detail: ${JSON.stringify(errorMessages)}`,
    );
  }
};

/**
 *不正なspaNameの時のエラー文と値のオブジェクトを返す関数
 * @param spaName
 * @returns errorCodeとinputのオブジェクトを返す
 */

const validateSpaName = (
  spaName: string,
):
  | {
      errorCode: string;
      input: string;
    }
  | undefined => {
  const isNullSpaName = checkBasicIsNotNull(spaName);
  if (isNullSpaName) {
    return {
      errorCode: 'SPA_NAME_NULL_ERROR',
      input: spaName,
    };
  }

  const isOverLengthSpaName = checkOverLength(spaName, MAX_SPA_BASIC_LENGTH);
  if (isOverLengthSpaName) {
    return {
      errorCode: 'SPA_NAME_OVER_LENGTH_50_ERROR',
      input: spaName,
    };
  }

  return undefined;
};

/**
 * 不正なAddressの時のエラー文と値のオブジェクトを返す関数
 * @param address
 * @returns 不正なAddressの値
 */

const validateAddress = (
  address: string,
):
  | {
      errorCode: string;
      input: string;
    }
  | undefined => {
  const isNullSpaAddress = checkBasicIsNotNull(address);

  if (isNullSpaAddress) {
    return {
      errorCode: 'SPA_ADDRESS_NULL_ERROR',
      input: address,
    };
  }
  const isOverLengthAddress = checkOverLength(address, MAX_SPA_BASIC_LENGTH);
  if (isOverLengthAddress) {
    return {
      errorCode: 'SPA_ADDRESS_OVER_LENGTH_50_ERROR',
      input: address,
    };
  }

  return undefined;
};

/**
 *不正なphoneNumberの時のエラー文と値のオブジェクトを返す関数
 * @param phoneNumber
 * @returns 不正なphoneNumberの値
 */

const validatePhoneNumber = (
  phoneNumber: string,
):
  | {
      errorCode: string;
      input: string;
    }
  | undefined => {
  const isNullPhoneNumber = checkBasicIsNotNull(phoneNumber);
  if (isNullPhoneNumber) {
    return {
      errorCode: 'SPA_PHONE_NUMBER_NULL_ERROR',
      input: phoneNumber,
    };
  }

  const isOverLengthPhoneNumber = checkOverLength(
    phoneNumber,
    MAX_SPA_PHONE_NUMBER_LENGTH,
  );
  if (isOverLengthPhoneNumber) {
    return {
      errorCode: 'SPA_PHONE_NUMBER_OVER_LENGTH_30_ERROR',
      input: phoneNumber,
    };
  }

  return undefined;
};

/**
 * 不正なbusinessHoursの時のエラー文と値のオブジェクトを返す関数
 * @param businessHours
 * @returns 不正なbusinessHoursの値
 */

const validateBusinessHours = (
  businessHours: string,
):
  | {
      errorCode: string;
      input: string;
    }
  | undefined => {
  const isNullBusinessHours = checkBasicIsNotNull(businessHours);
  if (isNullBusinessHours) {
    return {
      errorCode: 'SPA_BUSINESS_HOURS_NULL_ERROR',
      input: businessHours,
    };
  }

  const isOverLengthBusinessHours = checkOverLength(
    businessHours,
    MAX_SPA_BASIC_LENGTH,
  );
  if (isOverLengthBusinessHours) {
    return {
      errorCode: 'SPA_BUSINESS_HOURS_OVER_LENGTH_50_ERROR',
      input: businessHours,
    };
  }

  return undefined;
};

/**
 * 不正なregularHolidayの時のエラー文と値のオブジェクトを返す関数
 * @param regularHoliday
 * @returns 不正なregularHolidayの値
 */

const validateRegularHoliday = (
  regularHoliday: string,
):
  | {
      errorCode: string;
      input: string;
    }
  | undefined => {
  const isNullrRgularHoliday = checkBasicIsNotNull(regularHoliday);
  if (isNullrRgularHoliday) {
    return {
      errorCode: 'SPA_REGULAR_HOLIDAY_NULL_ERROR',
      input: regularHoliday,
    };
  }

  const isOverLengthRegularHoliday = checkOverLength(
    regularHoliday,
    MAX_SPA_BASIC_LENGTH,
  );
  if (isOverLengthRegularHoliday) {
    return {
      errorCode: 'SPA_REGULAR_HOLIDAY_OVER_LENGTH_50_ERROR',
      input: regularHoliday,
    };
  }

  return undefined;
};

/**
 * 不正なadultPriceの時のエラー文と値のオブジェクトを返す関数
 * @param adultPrice
 * @returns 不正なadultPriceの値
 */

const validateAdultPrice = (
  adultPrice: number,
): {
  errorCode: string;
  input: number;
} => {
  const isNullAdultPrice = checkPriceIsNotNull(adultPrice);
  if (isNullAdultPrice) {
    return {
      errorCode: 'ADULT_PRICE_NULL_ERROR',
      input: adultPrice,
    };
  }

  const isOverLengthAdultPrice = checkPriceLength(adultPrice);
  if (isOverLengthAdultPrice) {
    return {
      errorCode: 'ADULT_PRICE_OVER_9999999_ERROR',
      input: adultPrice,
    };
  }
};

/**
 * 不正なchildPriceの時のエラー文と値のオブジェクトを返す関数
 * @param  childPrice
 * @returns 不正なchildPriceの値
 */

const validateChildPrice = (
  childPrice: number,
):
  | {
      errorCode: string;
      input: number;
    }
  | undefined => {
  const isNullChildPrice = checkPriceIsNotNull(childPrice);

  if (isNullChildPrice) {
    return {
      errorCode: 'CHILD_PRICE_NULL_ERROR',
      input: childPrice,
    };
  }

  const isOverLengthChildPrice = checkPriceLength(childPrice);
  if (isOverLengthChildPrice) {
    return {
      errorCode: 'CHILD_PRICE_OVER_9999999_ERROR',
      input: childPrice,
    };
  }
};

/**
 *不正なadultWeekendPriceの時のエラー文と値のオブジェクトを返す関数
 * @param adultWeekendPrice
 * @returns　不正なadultWeekendPriceの値
 */
const validateAdultWeekendPrice = (
  adultWeekendPrice: number,
):
  | {
      errorCode: string;
      input: number;
    }
  | undefined => {
  const isNullAdultWeekendPrice = checkPriceIsNotNull(adultWeekendPrice);
  if (isNullAdultWeekendPrice) {
    return {
      errorCode: 'ADULT_WEEKEND_PRICE_NULL_ERROR',
      input: adultWeekendPrice,
    };
  }

  const isOverLengthAdultWeekendPrice = checkPriceLength(adultWeekendPrice);
  if (isOverLengthAdultWeekendPrice) {
    return {
      errorCode: 'ADULT_WEEKEND_PRICE_OVER_9999999_ERROR',
      input: adultWeekendPrice,
    };
  }
};

/**
 *不正なchildWeekendPriceの時のエラー文と値のオブジェクトを返す関数
 * @param childWeekendPrice
 * @returns　不正なchildWeekendPriceの値
 */

const validateChildWeekendPrice = (
  childWeekendPrice: number,
):
  | {
      errorCode: string;
      input: number;
    }
  | undefined => {
  const isNotNullChildWeekendPrice = checkPriceIsNotNull(childWeekendPrice);

  if (isNotNullChildWeekendPrice) {
    return {
      errorCode: 'CHILD_WEEKEND_PRICE_NULL_ERROR',
      input: childWeekendPrice,
    };
  }
  const isOverLengthChildWeekendPrice = checkPriceLength(childWeekendPrice);
  if (isOverLengthChildWeekendPrice) {
    return {
      errorCode: 'CHILD_WEEKEND_PRICE_OVER_9999999_ERROR',
      input: childWeekendPrice,
    };
  }
};

/**
 *不正なcustomSpaの値を返す関数
 * @param  customSpa
 * @returns　不正なcustomSpaの値
 */

const validateCustomSpa = (
  customSpa: string,
):
  | {
      errorCode: string;
      input: string;
    }
  | undefined => {
  const isOverLengthCustomSpa = checkOverLength(customSpa, MAX_OPTIONAL_LENGTH);

  if (isOverLengthCustomSpa) {
    return {
      errorCode: 'SPA_CUSTOM_OVER_LENGTH_50_ERROR',
      input: customSpa,
    };
  }
};

/**
 *不正なcustomFacilityの値を返す関数
 * @param  customFacility
 * @returns　不正なcustomFacilityの値
 */

const validateCustomFacility = (
  customFacility: string,
):
  | {
      errorCode: string;
      input: string;
    }
  | undefined => {
  const isOverLengthCustomFacility = checkOverLength(
    customFacility,
    MAX_OPTIONAL_LENGTH,
  );
  if (isOverLengthCustomFacility) {
    return {
      errorCode: 'CUSTOM_FACILITY_OVER_LENGTH_50_ERROR',
      input: customFacility,
    };
  }
};

/**
 * 基本情報（必須項目）があるかチェックする関数
 * @param basic
 * @return　trueー空文字　false-正常値
 */

const checkBasicIsNotNull = (basic: string) => {
  return !Boolean(basic);
};

/**
 * 最大文字数を超えてないかチェックする関数
 * @param basic
 * @returns true-文字数オーバー　false-正常値
 */

const checkOverLength = (category: string, maxLength: number) => {
  return category.length > maxLength;
};

/**
 * 料金（必須項目）があるかチェックする関数
 * @param price
 * @returns trueー空文字　false-正常値
 */

const checkPriceIsNotNull = (price: number) => {
  return price !== 0 && !Boolean(price);
};
/**
 * 料金入力値が最大入力値を超えていないかチェックする関数
 * @param  price
 * @returns true-文字数オーバー　false-正常値
 */

const checkPriceLength = (price: number) => {
  return price > MAX_PRICE;
};

//エラーコード作成関数
const createErrorMessages = (
  error: {
    errorCode: string;
    input: string;
  }[],
) => {
  if (error) {
    return error;
  }
};

const createPriceErrorMessage = (
  error: {
    errorCode: string;
    input: number;
  }[],
) => {
  if (error) {
    return error;
  }
};
