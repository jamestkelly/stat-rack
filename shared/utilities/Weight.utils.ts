/**
 * Converts a weight value from kilograms to pounds.
 * @param kgValue The weight in kilograms.
 * @returns The converted weight in pounds, rounded to two decimal places, or null if the input is null.
 */
export function kgToLbs(kgValue: number | null): number | null {
  if (kgValue === null) {
    return null;
  }

  const lbsValue = kgValue * 2.20462;

  return parseFloat(lbsValue.toFixed(2));
}

/**
 * Converts a weight value from pounds to kilograms.
 * @param lbsValue The weight in pounds.
 * @returns The converted weight in kilograms, rounded to two decimal places, or null if the input is null.
 */
export function lbsToKg(lbsValue: number | null): number | null {
  if (lbsValue === null) {
    return null;
  }

  const kgValue = lbsValue * 0.453592;

  return parseFloat(kgValue.toFixed(2));
}
