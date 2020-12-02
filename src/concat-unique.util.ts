export const ConcatUniqueValues = <T>(...arrays: Array<T>[]): Array<T> => {
  return [
    ...new Set(
      [].concat
        .apply([], arrays)
        .filter((item) => ![undefined, null].includes(item))
    ),
  ] as Array<T>;
};
