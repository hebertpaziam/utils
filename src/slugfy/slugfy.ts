export const Slugfy = (value: string): string => {
  try {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\W/g, "-");
  } catch (error) {
    return "";
  }
};
