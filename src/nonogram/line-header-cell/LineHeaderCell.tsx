import React from "react";
import styles from "./LineHeaderCell.module.css";

interface CellProps {
  numbers: number[];
  style?: React.CSSProperties;
}

export const LineHeaderCell = (props: CellProps) => {
  const { numbers, style = {} } = props;

  return (
    <div className={styles.headerCell} style={style}>
      {numbers.map((n, i) => (
        <span key={i} className={styles.headerNumber}>
          {n}
        </span>
      ))}
    </div>
  );
};
