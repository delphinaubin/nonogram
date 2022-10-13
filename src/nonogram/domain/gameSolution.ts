import { isArrayASquare } from "./utils/isArrayASquare";
import { countFilledZones } from "./countFIlledZones";

export class GameSolution {
  constructor(private readonly solution: number[][]) {
    if (!isArrayASquare(solution)) {
      throw new Error("The solution array is not a square");
    }
  }

  getLine(lineNumber: number): number[] {
    return this.solution[lineNumber];
  }

  getColumn(columnNumber: number): number[] {
    return this.solution.map((line) => line[columnNumber]);
  }

  getColumnHeader(columnNumber: number): number[] {
    return countFilledZones(this.getColumn(columnNumber));
  }

  getLineHeader(lineNumber: number): number[] {
    return countFilledZones(this.getLine(lineNumber));
  }

  getAllColumnHeaders(): number[][] {
    const result = [];
    for (let i = 0; i < this.solution.length; i++) {
      result.push(this.getColumnHeader(i));
    }
    return result;
  }
}
