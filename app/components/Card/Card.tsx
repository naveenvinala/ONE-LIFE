import React from "react";
import styles from "./card.module.scss";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>{children}</div>{" "}
    </div>
  );
};

export default Card;
