const MAX_SPABASIC_LENGTH = 50;
const MAX_PHONENUMBER_LENGTH = 30;
const MAX_PRICE = 9999999;
const MAX_OPTIONAL_LENGTH = 50;

/**
 * 基本情報のバリデーションのエラー情報を返す
 */

export const validateBasic = (
  spaName: string,
  address: string,
  phoneNumber: string,
  businessHours: string,
  regularHoliday: string,
) => {
  const invaildSpaName = validateSpaName(spaName);
  const invaildAdress = validateAddress(address);
  const invaildPhoneNumber = validatePhoneNumber(phoneNumber);
  const invaildBusinessHours = validateBusinessHours(businessHours);
  const invaildRegularHoliday = validateRegularHoliday(regularHoliday);

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

export const validatePrice = (
  adultPrice: number,
  childPrice: number,
  adultWeekendPrice: number,
  childWeekendPrice: number,
) => {
  const invaildAdultPrice = validateAdultPrice(adultPrice);
  const invaildChildPrice = validateChildPrice(childPrice);
  const invaildAdultWeekendPrice = validateAdultWeekendPrice(adultWeekendPrice);
  const invaildChildWeekendPrice = validateChildWeekendPrice(childWeekendPrice);

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
  const isNullSpaName = checkSpaNameIsNotNull(spaName);
  if (isNullSpaName) {
    return {
      errorCode: 'SpaName is Required',
      input: spaName,
    };
  }

  const isOverLengthSpaName = checkSpaNameLength(spaName);
  if (isOverLengthSpaName) {
    return {
      errorCode: 'SpaName is OverLength50',
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
  const isNullSpaAddress = checkAddressIsNotNull(address);

  if (isNullSpaAddress)
    return {
      errorCode: 'SpaAddress id Required',
      input: address,
    };
  const isOverLengthAddress = checkAddressLength(address);
  if (isOverLengthAddress)
    return {
      errorCode: 'SpaAddress is OverLength50',
      input: address,
    };
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
  const isNullPhoneNumber = checkPhoneNumberIsNotNull(phoneNumber);
  if (isNullPhoneNumber)
    return {
      errorCode: 'SpaPhoneNumber is Required',
      input: phoneNumber,
    };

  const isOverLengthPhoneNumber = checkPhoneNumberLength(phoneNumber);
  if (isOverLengthPhoneNumber)
    return {
      errorCode: 'SpaNumber is OverLength30',
      input: phoneNumber,
    };
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
  const isNullBusinessHours = checkBusinessHoursIsNotNull(businessHours);
  if (isNullBusinessHours)
    return {
      errorCode: 'SpabusinessHours is Required',
      input: businessHours,
    };

  const isOverLengthBusinessHours = checkBusinessHoursLength(businessHours);
  if (isOverLengthBusinessHours)
    return {
      errorCode: 'SpabBusinessHours is OverLength50',
      input: businessHours,
    };

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
  const isNullrRgularHoliday = checkRegularHolidayIsNotNull(regularHoliday);
  if (isNullrRgularHoliday)
    return {
      errorCode: 'SpaRegularHoliday is Required',
      input: regularHoliday,
    };
  const isOverLengthRegularHoliday = checkRegularHolidayLength(regularHoliday);
  if (isOverLengthRegularHoliday)
    return {
      errorCode: 'SpaRegularHoliday is OverLength50',
      input: regularHoliday,
    };
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
  const isNullAdultPrice = checkAdultPriceIsNotNull(adultPrice);
  if (isNullAdultPrice)
    return {
      errorCode: 'AdultPrice is Required',
      input: adultPrice,
    };

  const isOverLengthAdultPrice = checkAdultPriceLength(adultPrice);
  if (isOverLengthAdultPrice)
    return {
      errorCode: 'AdultPrice is OverLength9999999',
      input: adultPrice,
    };
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
  const isNullChildPrice = checkChildPriceIsNotNull(childPrice);

  if (isNullChildPrice)
    return {
      errorCode: 'ChildPrice is Required',
      input: childPrice,
    };
  const isOverLengthChildPrice = checkChildPriceLength(childPrice);
  if (isOverLengthChildPrice)
    return {
      errorCode: 'ChildPrice is OverLength9999999',
      input: childPrice,
    };
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
  const isNullAdultWeekendPrice =
    checkAdultWeekendPriceIsNotNull(adultWeekendPrice);
  if (isNullAdultWeekendPrice)
    return {
      errorCode: 'AdultWeekendPrice is Required',
      input: adultWeekendPrice,
    };

  const isOverLengthAdultWeekendPrice =
    checkAdultWeekendPriceLength(adultWeekendPrice);
  if (isOverLengthAdultWeekendPrice)
    return {
      errorCode: 'AdultWeekendPrice is OverLength9999999',
      input: adultWeekendPrice,
    };
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
  const isNotNullChildWeekendPrice =
    checkCildWeekendPriceIsNotNull(childWeekendPrice);

  if (isNotNullChildWeekendPrice)
    return {
      errorCode: 'ChildWeekendPrice is Required',
      input: childWeekendPrice,
    };
  const isOverLengthChildWeekendPrice =
    checkChildWeekendPriceLength(childWeekendPrice);
  if (isOverLengthChildWeekendPrice)
    return {
      errorCode: 'ChildWeekendPrice is OverLength9999999',
      input: childWeekendPrice,
    };
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
  const isOverLengthCustomSpa = checkCustomSpaLength(customSpa);

  if (isOverLengthCustomSpa)
    return {
      errorCode: 'CustomSpa　is OverLength50',
      input: customSpa,
    };
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
  const isOverLengthCustomFacility = checkCustomFacilityLength(customFacility);
  if (isOverLengthCustomFacility)
    return {
      errorCode: 'CustomFacility is OverLength50',
      input: customFacility,
    };
};

/**
 * spaName(必須項目)があるかチェックする関数
 * @param spaName
 * @returns trueー空文字　false-正常値
 */

const checkSpaNameIsNotNull = (spaName: string) => {
  return !Boolean(spaName);
};

/**
 * spaNameの最大文字数10文字にする関数
 * @param spaName(string)
 * @returns true-文字数オーバー　false-正常値
 */

const checkSpaNameLength = (spaName: string) => {
  return spaName.length > MAX_SPABASIC_LENGTH;
};

/**
 * address(必須項目)があるかチェック
 * @param adress
 * @returns trueー空文字　false-正常値
 */

const checkAddressIsNotNull = (address: string) => {
  return !Boolean(address);
};

/**
 * addressの最大文字数10文字
 * @param address
 * @returns true-文字数オーバー　false-正常値
 */

const checkAddressLength = (adress: string) => {
  return adress.length > MAX_SPABASIC_LENGTH;
};

/**
 * phoneNumber(必須項目)があるかチェック
 * @param phoneNumber
 * @returns trueー空文字　false-正常値
 */

const checkPhoneNumberIsNotNull = (phoneNumber: string) => {
  return !Boolean(phoneNumber);
};

/**
 * phoneNumberの最大文字数
 * @param phoneNumber
 * @returns true-文字数オーバー　false-正常値
 */

const checkPhoneNumberLength = (phoneNumber: string) => {
  return phoneNumber.length > MAX_PHONENUMBER_LENGTH;
};

/**
 * businessHours(必須項目)があるかチェック
 * @param businessHours
 * @returns trueー空文字　false-正常値
 */

const checkBusinessHoursIsNotNull = (businessHours: string) => {
  return !Boolean(businessHours);
};

/**
 * businessHoursの最大文字数
 * @param businessHours
 * @returns true-文字数オーバー　false-正常値
 */

const checkBusinessHoursLength = (businessHours: string) => {
  return businessHours.length > MAX_SPABASIC_LENGTH;
};

/**
 * regularHoliday(必須項目)があるかチェック
 * @param regularHoliday
 * @returns trueー空文字　false-正常値
 */
const checkRegularHolidayIsNotNull = (regularHoliday: string) => {
  return !Boolean(regularHoliday);
};

/**
 * regularHolidayの最大文字数
 * @param regularHoliday
 * @returns true-文字数オーバー　false-正常値
 */

const checkRegularHolidayLength = (regularHoliday: string) => {
  return regularHoliday.length > MAX_SPABASIC_LENGTH;
};

/**
 * adultPrice(必須項目)があるかチェック
 * @param  adultPrice
 * @returns trueー空文字　false-正常値
 */

const checkAdultPriceIsNotNull = (adultPrice: number) => {
  return adultPrice !== 0 && !Boolean(adultPrice);
};

/**
 * adultPriceの最大文字数
 * @param  adultPrice
 * @returns true-文字数オーバー　false-正常値
 */

const checkAdultPriceLength = (adultPrice: number) => {
  return adultPrice > MAX_PRICE;
};

/**
 * 必須項目(childPrice)があるかチェック
 * @param childPrice
 * @returns　trueー空文字　false-正常値
 */

const checkChildPriceIsNotNull = (childPrice: number) => {
  return childPrice !== 0 && !Boolean(childPrice);
};
/**
 * childPriceの最大文字数
 * @param childPrice
 * @returns　true-文字数オーバー　false-正常値
 */

const checkChildPriceLength = (childPrice: number) => {
  return childPrice > MAX_PRICE;
};

/**
 * 必須項目(adultWeekendPrice)があるかチェックする関数
 * @param  adultWeekendPrice
 * @returns　trueー空文字　false-正常値
 */ const checkAdultWeekendPriceIsNotNull = (adultWeekendPrice: number) => {
  return adultWeekendPrice !== 0 && !Boolean(adultWeekendPrice);
};

/**
 *adultWeekendPriceの最大文字数をチェックする関数
 * @param adultWeekendPrice
 * @returns　true-文字数オーバー　false-正常値
 */

const checkAdultWeekendPriceLength = (adultWeekendPrice: number) => {
  return adultWeekendPrice > MAX_PRICE;
};

/**
 *必須項目(childWeekendPrice)があるかチェックする関数
 * @param childWeekendPrice
 * @returns　trueー空文字　false-正常値
 */

const checkCildWeekendPriceIsNotNull = (childWeekendPrice: number) => {
  return childWeekendPrice !== 0 && !Boolean(childWeekendPrice);
};

/**
 *childWeekendPriceの最大文字数をチェックする関数
 * @param childWeekendPrice
 * @returns　true-文字数オーバー　false-正常値
 */

const checkChildWeekendPriceLength = (childWeekendPrice: number) => {
  return childWeekendPrice > MAX_PRICE;
};

/**
 *
 * @param  customSpa
 * @returns
 */

const checkCustomSpaLength = (customSpa: string) => {
  return customSpa.length > MAX_OPTIONAL_LENGTH;
};

/**
 *
 * @param customFacility
 * @returns
 */

const checkCustomFacilityLength = (customFacility: string) => {
  return customFacility.length > MAX_OPTIONAL_LENGTH;
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
