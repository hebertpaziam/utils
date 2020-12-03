import { Dig } from './dig';

describe("Util Dig", () => {
  const today = new Date();
  const propToFind = "x";
  const data = {
    a: {
      b: {
        c: {
          d: {
            x: today,
          },
        },
      },
    },
  };

  it("should return today value from large object", () => {
    expect(Dig(data, "a")).toEqual(data.a);
    expect(Dig(data, "b")).toEqual(data.a.b);
    expect(Dig(data, "c")).toEqual(data.a.b.c);
    expect(Dig(data, "d")).toEqual(data.a.b.c.d);
    expect(Dig(data, propToFind)).toEqual(today);
  });

  it("should return null when null object is passed", () => {
    expect(Dig(null, propToFind)).toBeNull();
  });

  it("should return undefined when invalid property is passed", () => {
    expect(Dig(data, "")).toBeUndefined();
    expect(Dig(data, null)).toBeUndefined();
    expect(Dig(data, undefined)).toBeUndefined();
  });
});
