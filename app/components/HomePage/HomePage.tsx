import React from "react";
import Image from "next/image";
import styles from "./homePage.module.scss";
import arnold from "@/public/photos/arnold.jpeg";
import athelte from "@/public/photos/athelte.jpeg";
import female from "@/public/photos/female.jpeg";
import fitnessman from "@/public/photos/fitnessman.jpeg";
import pushUpsMan from "@/public/photos/pushUpsMan.jpeg";
import sportman from "@/public/photos/sportman.png";
import Content from "../Content/Content";
import Button from "../Button/Button";
import Pattern from "@/public/photos/pattern.svg";
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
        <div className={styles.container}>
          <Image
            className={styles.patternImage}
            src={Pattern}
            alt="Picture of the Pattern"
          />
          <div className={styles.center}>
            <div className={styles.polaroid}>
              <h3> Sample text. Click to select the Text Element.</h3>
            </div>
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
      </div>
    </div>
  );
};

export default HomePage;
