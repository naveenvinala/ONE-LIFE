import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import onelife from "../../../public/photos/onelife.png";

const page = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={onelife} alt="Logo" height={80} width={80} />
      </div>
      <div className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/registration">Registration </Link>
          </li>
          <li>
            <Link href="/Photos"> Photos </Link>
          </li>
          <li>
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>login</div>
    </header>
  );
};

export default page;
