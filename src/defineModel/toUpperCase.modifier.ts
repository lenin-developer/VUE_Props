export const toUpperCaseMod = (
  modifiers: Record<string, true | undefined>,
  value: string
) => {
  let newValue = value;
  if (modifiers?.toUpperCase) {
    return newValue?.toUpperCase();
  }
  return newValue;
};
