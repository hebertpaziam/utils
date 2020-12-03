export const SanitizeObject = (data: any, toRemoveList: Array<string> = []) => {
  if (!/Object|Array|Null|Undefined/.test({}.toString.apply(data))) return data;

  for (const key in data) {
    if (toRemoveList.includes(key)) data[key] = null;

    if (/Object/.test({}.toString.apply(data[key])))
      data[key] = SanitizeObject(data[key]);

    if (/Null|Undefined/.test({}.toString.apply(data[key]))) delete data[key];
  }

  return Object.keys(data).length === 0 ? null : data;
};
