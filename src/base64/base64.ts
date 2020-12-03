export const Base64 = {
  decodeObject<T>(hash: string) {
    try {
      return JSON.parse(atob(hash));
    } catch (error) {
      return null;
    }
  },
  encodeObject(object: Object) {
    return btoa(JSON.stringify(object));
  },
};
