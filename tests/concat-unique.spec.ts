import { ConcatUniqueValues } from '../src/concat-unique.util';

describe("Util ConcatUniqueValues", () => {
  const data = [1, "lorem ipsum", true, {}, [], false, new Date()];

  it("should return an array with unique values", () => {
    const cleanedData = ConcatUniqueValues(
      data.reverse(),
      data,
      data.slice(data.length / 2, 0),
      data.slice(0, data.length / 2),
      [1]
    );

    expect(cleanedData).toStrictEqual(data);
  });

  it("should return array with undefined when invalid data is passed", () => {
    const cleanedData = ConcatUniqueValues(
      null,
      undefined,
      [null],
      [undefined]
    );
    expect(ConcatUniqueValues(cleanedData)).toStrictEqual([]);
  });
});
