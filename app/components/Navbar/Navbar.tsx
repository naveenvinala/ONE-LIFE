import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import onelife from "@/public/photos/onelife.png";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src={onelife} alt="Logo" height={80} width={100} />
      </div>
      <div className={styles.navigation}>
        <ul>
          <li>
            <Link className={styles.active} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.active} href="/registration">
              Registration
            </Link>
          </li>
          <li>
            <Link className={styles.active} href="/Photos">
              {" "}
              Photos{" "}
            </Link>
          </li>
          <li>
            <Link className={styles.active} href="/contact">
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>login</div>
    </nav>
  );
};

export default Navbar;
