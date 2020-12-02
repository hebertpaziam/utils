export const SanitizeObject = (rawData: any) => {
  if (typeof rawData !== 'object' || rawData === null || rawData instanceof Date) return rawData;

  const data = typeof rawData === 'object' && rawData instanceof Array ? [...rawData] : { ...rawData };
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (typeof data === 'object') data[key] = SanitizeObject(data[key]);
      if ([undefined, null].includes(data[key]) || key === '__typename') delete data[key];
    }
  }

  return Object.keys(data).length === 0 ? null : data;
};
