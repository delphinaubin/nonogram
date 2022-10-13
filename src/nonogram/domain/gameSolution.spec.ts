import { GameSolution } from "./gameSolution";

describe("getLine", () => {
  it("returns the line corresponding to the given position", () => {
    const solution = new GameSolution([
      [0, 0],
      [1, 1],
    ]);

    expect(solution.getLine(0)).toEqual([0, 0])

  });
});

describe('getColumn', () => {
  it('returns the column corresponding to the given position', () => {
    const solution = new GameSolution([
      [0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
    ])
    expect(solution.getColumn(0)).toEqual([0, 0, 0, 0, 0])
    expect(solution.getColumn(3)).toEqual([1, 1, 1, 0, 0])
  });
});


describe('getColumnHeader', () => {
  it('returns the header of the column at the given index', () => {
    const solution = new GameSolution([
      [0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
    ])
    expect(solution.getColumnHeader(0)).toEqual([])
    expect(solution.getColumnHeader(3)).toEqual([3, 1])
  });
});


describe('getLineHeader', () => {
  it('returns the header of the line at the given index', () => {
    const solution = new GameSolution([
      [0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [0, 1, 1, 0, 1],
      [0, 0, 0, 1, 0],
    ])
    expect(solution.getLineHeader(0)).toEqual([4])
    expect(solution.getLineHeader(3)).toEqual([2, 1])
  });
});

