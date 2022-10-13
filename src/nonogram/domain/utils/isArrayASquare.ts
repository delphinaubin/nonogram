export function isArrayASquare(array: number[][]): boolean {
  return array.every(line => line.length === array.length);
}