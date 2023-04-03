export function stringToNumber(value?: string | null): number | null {
  if (value) {
    const parsedValue = +value;

    return isNaN(parsedValue) ? null : parsedValue;
  }

  return null;
}
