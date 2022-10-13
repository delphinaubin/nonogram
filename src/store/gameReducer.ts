import { createSlice } from "@reduxjs/toolkit";
import { CellState } from "../nonogram/cell/Cell";
import { RootState } from "./store";

const GRID_SIZE = 5;

const generateInitialCellState = (gridSize: number): CellState[][] => {
  return new Array(gridSize).fill(new Array(gridSize).fill("unknown"));
};

const initialState = {
  solution: [
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ],
  cellsState: generateInitialCellState(GRID_SIZE),
  gridSize: GRID_SIZE,
};

export const gameSlice = createSlice({
  initialState,
  name: "game",
  reducers: {},
});

export const selectCellState = (state: RootState) => state.game.cellsState;
export const selectGridSize = (state: RootState) => state.game.gridSize;
