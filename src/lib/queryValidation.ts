export const validateQuerySpa = (id: number) => {
  if (id === undefined) {
    throw new Error("Can't find SPA_ID_BACKEND");
  }
};
