export const insertByIndex = <T>(
  array: T[],
  targetIndex: number,
  targetValue: T | T[],
): T[] => {
  const targetValueArray = Array.isArray(targetValue)
    ? targetValue
    : [targetValue];
  return [
    ...array.slice(0, targetIndex),
    ...targetValueArray,
    ...array.slice(targetIndex),
  ];
};

export const replaceByIndex = <T>(
  array: T[],
  targetIndex: number,
  targetValue: T | T[],
  replaceAmount: number = 1,
): T[] => {
  const targetValueArray = Array.isArray(targetValue)
    ? targetValue
    : [targetValue];
  return [
    ...array.slice(0, targetIndex),
    ...targetValueArray,
    ...array.slice(targetIndex + replaceAmount),
  ];
};
