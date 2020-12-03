import { FlattenObject } from './flatten-object';

describe("Util FlattenObject", () => {
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

  it("should flatten object separating nasted objects with underscore", () => {
    expect(FlattenObject(data)).toStrictEqual({ a_b_c_d_x: today });
  });
});
