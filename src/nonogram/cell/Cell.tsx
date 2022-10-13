import React, { MouseEventHandler } from "react";
import styles from "./Cell.module.css";
import classNames from "classnames";

export type CellState = "unknown" | "filled" | "empty" | "crossed";

interface CellProps {
  x: number;
  y: number;
  cellState: CellState;
  onClick?: () => void;
  onRightClick?: () => void;
}

const noop = () => {};

export const Cell = (props: CellProps) => {
  const { onClick = noop, onRightClick = noop, cellState } = props;

  const onCellClick: MouseEventHandler = (e) => {
    e.preventDefault();
    onClick();
  };

  const onCellRightClick: MouseEventHandler = (e) => {
    e.preventDefault();
    onRightClick();
  };

  return (
    <div
      className={classNames(styles.cell, {
        [styles.filled]: cellState === "filled",
      })}
      onClick={onCellClick}
      onContextMenu={onCellRightClick}
    >
      {cellState === "crossed" ? "X" : ""}
    </div>
  );
};
