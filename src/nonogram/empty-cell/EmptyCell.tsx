import React from "react";
import styles from "./EmptyCell.module.css";

interface CellProps {
  style?: React.CSSProperties;
}

export const EmptyCell = (props: CellProps) => {
  const { style = {} } = props;

  return <div className={styles.emptyCell} style={style}></div>;
};
