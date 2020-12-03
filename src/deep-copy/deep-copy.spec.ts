import { DeepCopy } from './deep-copy';

describe("Util DeepCopy", () => {
  it("should return a deep copy from object", () => {
    const data = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        f: 4,
      },
    };

    const copy = DeepCopy(data);
    expect(copy).toStrictEqual(data);
  });

  it("should return same non object data when is passed", () => {
    const today = new Date();
    expect(DeepCopy([{}])).toStrictEqual([{}]);
    expect(DeepCopy([])).toStrictEqual([]);
    expect(DeepCopy(0)).toBe(0);
    expect(DeepCopy(1)).toBe(1);
    expect(DeepCopy(true)).toBe(true);
    expect(DeepCopy(false)).toBe(false);
    expect(DeepCopy("")).toBe("");
    expect(DeepCopy("lorem ipsum")).toBe("lorem ipsum");
    expect(DeepCopy(null)).toBe(null);
    expect(DeepCopy(undefined)).toBe(undefined);
    expect(DeepCopy(today)).toBe(today);
  });
});
