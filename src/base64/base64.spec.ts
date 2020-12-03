import { Base64 } from './base64';

describe("Util Base64", () => {
  const data = new Date().toJSON();
  const encodedData = btoa(JSON.stringify(data));

  it("should return valid decoded data when hash is passed", () => {
    expect(Base64.decodeObject(encodedData)).toBe(data);
  });

  it("should return valid encoded data", () => {
    expect(Base64.encodeObject(data)).toBe(encodedData);
  });

  it("should return null when invalid data is passed", () => {
    expect(Base64.decodeObject(null)).toBeNull();
    expect(Base64.decodeObject(undefined)).toBeNull();
  });
});
