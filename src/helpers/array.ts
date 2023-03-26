function move<T>(array: Array<T>, from: number, to: number): Array<T> {
  const newArray = [...array];
  newArray.splice(to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}

export { move };
