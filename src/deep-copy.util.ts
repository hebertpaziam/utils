export const DeepCopy = (data: any) => {
  if ({}.toString.apply(data) === "[object Object]") return data;

  const copy: Object = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) copy[key] = DeepCopy(data[key]);
  }

  return copy;
};
