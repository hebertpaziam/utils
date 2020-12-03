export const FlattenObject = (object: any, parent?: any, res = {}) => {
  for (const key in object) {
    const value = object[key];
    const propName = parent ? `${parent}_${key}` : key;

    if (/Object|Array/.test({}.toString.apply(value))) {
      FlattenObject(value, propName, res);
    } else res[propName] = value;
  }
  return res as any;
};
