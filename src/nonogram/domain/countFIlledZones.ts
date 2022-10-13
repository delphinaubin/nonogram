export function countFilledZones(cells: number[]): number[] {
  let isLastCellFilled = false;
  let currentFilledAreaLength = 0;
  const result = [];
  for (const cell of cells) {
    if (cell) {
      currentFilledAreaLength++;
      isLastCellFilled = true;
    } else if (isLastCellFilled) {
      result.push(currentFilledAreaLength);
      currentFilledAreaLength = 0;
      isLastCellFilled = false;
    }
  }

  if (isLastCellFilled) {
    result.push(currentFilledAreaLength);
  }

  return result;
}
