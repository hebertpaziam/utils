export const FlattenObject = (object: any, parent?: any, res = {}) => {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const propName = parent ? `${parent}_${key}` : key;
      typeof object[key] === 'object' ? FlattenObject(object[key], propName, res) : (res[propName] = object[key]);
    }
  }
  return res as any;
};
