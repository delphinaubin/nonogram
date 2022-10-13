import {isArrayASquare} from "./isArrayASquare";

describe("isArrayASquare", () => {
  it("returns true if the given array is a square", () => {
    const aSquare = [
      [1, 1],
      [1, 1],
    ];
    expect(isArrayASquare(aSquare)).toBe(true)
  });


  it("returns false if the given array is NOT a square", () => {
    const aSquare = [
      [1, 1],
      [1, 1],
      [1, 1],
    ];
    expect(isArrayASquare(aSquare)).toBe(false)
  });
});
