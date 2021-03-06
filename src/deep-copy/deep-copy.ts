export const DeepCopy = (data: any) => {
  if (!/Object/.test({}.toString.apply(data))) return data;

  const copy: Object = {};
  for (const key in data) {
    copy[key] = DeepCopy(data[key]);
  }

  return copy;
};
