export const ConcatUniqueValues = <T>(...arrays: Array<T>[]): Array<T> => {
  return <Array<T>>[
    ...new Set(
      [].concat
        .apply([], arrays)
        .filter((item) => ![undefined, null].includes(item))
    ),
  ];
};
