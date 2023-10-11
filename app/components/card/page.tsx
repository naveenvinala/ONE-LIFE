import React from "react";
import styles from "./page.module.scss";

type CardProps = {
  children: React.ReactNode;
  title?: string;
  subtTitle?: string;
};

const Card = ({ title, children, subtTitle }: CardProps) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}> {title} </h1>
      <p className={styles.subtitle}>{subtTitle}</p>
      {children}
    </div>
  );
};

export default Card;
