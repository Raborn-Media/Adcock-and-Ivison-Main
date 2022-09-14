import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.btmbar}>
        <Image
          src="/employment_icon.svg"
          alt="Employment Logo"
          width={200}
          height={100}
        />
        <p>Employment Claims</p>
      </div>

      <div className={styles.btmbar}>
        <Image
          src="/personal_icon.svg"
          alt="Employment Logo"
          width={200}
          height={100}
        />
        <p>Personal Injury</p>
      </div>

      <div className={styles.btmbar}>
        <Image
          src="/medical_icon.svg"
          alt="Employment Logo"
          width={200}
          height={100}
        />
        <p>Medical</p>
      </div>

      <div className={styles.btmbar}>
        <Image
          src="/business_icon.svg"
          alt="Employment Logo"
          width={200}
          height={100}
        />
        <p>Business</p>
      </div>

      <div className={styles.btmbar}>
        <Image
          src="/insurance_icon.svg"
          alt="Employment Logo"
          width={200}
          height={100}
        />
        <p>Insurance</p>
      </div>
    </div>
  );
};

export default Nav;
