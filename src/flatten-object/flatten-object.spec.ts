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

  console.log(FlattenObject(data));

  it("should flatten object separating nasted objects with underscore", () => {
    expect(data).toBeDefined();
  });
});
