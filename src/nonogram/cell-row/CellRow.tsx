import React from "react";
import styles from "./CellRow.module.css";

interface CellRowProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const CellRow = (props: CellRowProps) => {
  const { children, style = {} } = props;
  return (
    <div className={styles.cellRow} style={style}>
      {children}
    </div>
  );
};
