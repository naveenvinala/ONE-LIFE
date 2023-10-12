import React from "react";
import styles from "./card.module.scss";

// interface CardProps {
//   children: React.ReactNode;
// }

const page = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default page;
