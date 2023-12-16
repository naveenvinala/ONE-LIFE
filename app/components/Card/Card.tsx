import React from "react";
import styles from "./card.module.scss";
//import fitness from "@public/photos/fitness.jpeg";
import fitnessman from "@/public/photos/fitnessman.jpeg";
import Image from "next/image";
interface CardProps {
  children: React.ReactNode;
  width?: string;
}

const Card = ({ width, children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
