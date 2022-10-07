import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Headerstyles.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";

const Header = () => {
  const [showDropNav, setShowDropNav] = useState(false);

  const [headClass, setHeadClass] = useState(styles.header);
  const [navClass, setNavClass] = useState(styles.navList);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setHeadClass(styles.headerGrey);
        setNavClass(styles.navListGrey);
      } else {
        setHeadClass(styles.header);
        setNavClass(styles.navList);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={headClass}>
        <div className={styles.image}>
          <Link href={"/"}>
            <Image
              src="/Adcock_logo.svg"
              alt="Adcock Logo"
              width={400}
              height={120}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className={styles.topright}>
          <div className={styles.toprightinfo}>
            <Image
              src="/free_consultation_icon.svg"
              alt="Adcock Logo"
              width={30}
              height={30}
            />
            <p>FREE CONSULTATION</p>
          </div>
          <div className={styles.toprightinfo}>
            <Image
              src="/phone_icon.svg"
              alt="Adcock Logo"
              width={30}
              height={30}
            />
            <p>PHONE: 601.898.9887</p>
          </div>
        </div>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/attorneys">YOUR ATTORNEYS</Link>
          </li>
          <li
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => setShowDropNav(!showDropNav)}
          >
            <svg
              version="1.1"
              id="Isolation_Mode"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 397.6 302.4"
              enableBackground="new 0 0 397.6 302.4"
              space="preserve"
			  width="1.5rem"
			  fill="#fff"
			  style={{marginBottom: "-0.2rem", marginRight: "0.2rem"}}
            >
              <polygon points="207.8,264.3 208,264.5 351.9,120.6 306,74.7 207.8,173 109.5,74.7 63.6,120.6 207.6,264.5 " />
            </svg>
            YOUR CASE
            <div
              className={styles.navDropdown}
              style={{ display: showDropNav ? "" : "none" }}
            >
              <ul className={navClass}>
                <Link href={"/claims"}>
                  <li>&bull; Employment Claims</li>
                </Link>
                <Link href={"/injury"}>
                  <li>&bull; Personal Injury</li>
                </Link>
                <Link href={"/medical"}>
                  <li>&bull; Medical</li>
                </Link>
                <Link href={"/business"}>
                  <li>&bull; Business</li>
                </Link>
                <Link href={"/insurance"}>
                  <li>&bull; Insurance</li>
                </Link>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/news">IN THE NEWS</Link>
          </li>
          <li>
            <Link href="/talk">TALK TO US</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
