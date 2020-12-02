export const FindProperty = (obj, keyToFind) => {
  return Object.entries(obj).reduce(
    (acc, [key, value]) =>
      key === keyToFind
        ? acc.concat(value)
        : typeof value === "object"
        ? acc.concat(FindProperty(value, keyToFind))
        : acc,
    null
  );
};
