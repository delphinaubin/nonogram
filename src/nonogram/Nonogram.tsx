import React from "react";
import styles from "./Nonogram.module.css";
import { Cell } from "./cell/Cell";
import { CellRow } from "./cell-row/CellRow";
import { GameSolution } from "./domain/gameSolution";
import { ColumnHeader } from "./column-header/ColumnHeader";
import { LineHeaderCell } from "./line-header-cell/LineHeaderCell";
import { useSelector } from "react-redux";
import { selectCellState, selectGridSize } from "../store/gameReducer";

const gameSolution = new GameSolution([
  [0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
]);

export const NonogramGame = () => {
  const cellState = useSelector(selectCellState);
  const gridSize = useSelector(selectGridSize);

  const onCellClick = (x: number, y: number) => () => {
    console.log("click", { x, y });
  };
  const onCellRightClick = (x: number, y: number) => () => {
    console.log("right click", { x, y });
  };

  const rows = [];
  for (let y = 0; y < gridSize; y++) {
    const cells = [];
    for (let x = 0; x < gridSize; x++) {
      cells.push(
        <Cell
          key={`${y}_${x}`}
          x={x}
          y={y}
          cellState={cellState[y][x]}
          onClick={onCellClick(x, y)}
          onRightClick={onCellRightClick(x, y)}
        />
      );
    }
    rows.push(
      <CellRow key={y}>
        <LineHeaderCell numbers={gameSolution.getLineHeader(y)} />
        {cells}
      </CellRow>
    );
  }

  return (
    <div className={styles.gameContainer}>
      <ColumnHeader columnHeaders={gameSolution.getAllColumnHeaders()} />
      {rows}
    </div>
  );
};
