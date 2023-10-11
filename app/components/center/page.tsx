import React, { Children } from "react";
import styles from "./page.module.scss";

type CenterProps = {
  children: React.ReactNode;
};

const Center = ({ children }: CenterProps) => {
  return <div className={styles.center}>{children}</div>;
};

export default Center;
