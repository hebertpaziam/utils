export const Dig = (obj: any, keyToFind: string) => {
  try {
    let value = obj[keyToFind];
    for (const key in obj) {
      if (value === undefined) {
        value = Dig(obj[key], keyToFind);
      } else break;
    }
    return value;
  } catch (error) {
    return null;
  }
};
