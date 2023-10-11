import React from "react";
import styles from "./page.module.scss";
import { inter } from "../../utils/fonts";
const ContentPage = () => {
  return (
    <div className={styles.content}>
      <h1 className={`${styles.title} ${inter.className}`}>
        Welcome to <span> One Life </span>
      </h1>
      
      <h4 className={styles.subTitle}>
        {" "}
        <span> Fitness Club</span> – Your Ultimate Fitness Destination!
      </h4>
      <p className={styles.para}>
        {" "}
        At One Life, we are dedicated to helping you achieve your fitness goals
        and lead a healthier, happier life. Whether you're looking to lose
        weight, build muscle, or simply improve your overall well-being, our
        state-of-the-art gym facilities and expert trainers are here to support
        you every step of the way.
      </p>
    </div>
  );
};

export default ContentPage;
