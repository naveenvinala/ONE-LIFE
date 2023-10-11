import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import arnold from "@/public/photos/arnold.jpeg";
import athelte from "@/public/photos/athelte.jpeg";
import female from "@/public/photos/female.jpeg";
import fitnessman from "@/public/photos/fitnessman.jpeg";
import pushUpsMan from "@/public/photos/pushUpsMan.jpeg";
import sportman from "@/public/photos/sportman.png";
import Content from "../content/page";
import Button from "../button/page";
const HomePage = () => {
  return (
    <div className={styles.imageCarousel}>
      <div className={styles.carousel}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={fitnessman}
            alt="Picture of the fitnessman"
          />
          <div className={styles.topLeft}>
            <Content />
            <Button />
          </div>
        </div>
        <Image
          className={styles.slide}
          src={female}
          alt="Picture of the female"
        />
        <Image
          className={styles.slide}
          src={sportman}
          alt="Picture of the sportman"
        />

        <div className={styles.container}>
          <Image
            className={styles.slide}
            src={athelte}
            alt="Picture of the athelte"
          />
          <div className={styles.topLeft}>topLeft</div>
        </div>

        <Image
          className={styles.slide}
          src={pushUpsMan}
          alt="Picture of the pushUpsMan"
        />
        {/* <Image
          className={styles.slide}
          src={arnold}
          alt="Picture of the sportman"
        /> */}
      </div>
    </div>
  );
};

export default HomePage;
