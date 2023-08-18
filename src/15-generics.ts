function getValue<T>(value: T) {
  return value;
}

function getValue2<T, U>(value: T) {
  const array: T[] = [value];
  return value;
}

getValue<string>('12').charAt(0);
