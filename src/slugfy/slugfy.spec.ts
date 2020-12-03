import { Slugfy } from './slugfy';

describe("Util Slugfy", () => {
  it("should slugfy string replacing special characters and spaces", () => {
    const data = "Lórêm Ípsùm Dõlar sït 123";
    expect(Slugfy(data)).toMatch("lorem-ipsum-dolar-sit-123");
  });

  it("should return empty string when invalid data is passed", () => {
    expect(Slugfy(null)).toMatch("");
    expect(Slugfy(undefined)).toMatch("");
    expect(Slugfy((new Date() as unknown) as string)).toMatch("");
    expect(Slugfy((3 as unknown) as string)).toMatch("");
    expect(Slugfy(([] as unknown) as string)).toMatch("");
    expect(Slugfy(({} as unknown) as string)).toMatch("");
  });
});
