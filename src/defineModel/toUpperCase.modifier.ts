export const toUpperCaseMod = (
  modifiers: { toUpperCase: boolean },
  value: string
) => {
  let newValue = value;
  if (modifiers?.toUpperCase) {
    return newValue?.toUpperCase();
  }
  return newValue;
};
