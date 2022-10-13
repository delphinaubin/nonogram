import { CellRow } from "../cell-row/CellRow";
import { ColumnHeaderCell } from "./column-header-cell/ColumnHeaderCell";
import React from "react";
import { EmptyCell } from "../empty-cell/EmptyCell";

interface ColumnHeaderProps {
  columnHeaders: number[][];
}

export const ColumnHeader = (props: ColumnHeaderProps) => {
  const { columnHeaders } = props;
  return (
    <CellRow style={{ borderTop: "none" }}>
      <EmptyCell />
      {columnHeaders.map((h, i) => (
        <ColumnHeaderCell key={i} numbers={h} />
      ))}
    </CellRow>
  );
};
