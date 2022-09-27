import React from "react";
import styles from "../styles/Home.module.css";

const Owners = () => {
  return (
    <div className={styles.owners}>
      <div className={styles.bp}>
        <div className={styles.person}>
          <svg
            version="1.1"
            width="12rem"
            id="Isolation_Mode"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 82 82"
            enableBackground="new 0 0 82 82"
            space="preserve"
            fill="#fff"
          >
            <g>
              <circle cx="38.1" cy="19.7" r="15.8" />
              <path
                d="M38.1,40.9c-17.3,0-31.4,8.6-31.4,19.2c0,0.1,0,0.2,0,0.3c7.6,8.8,18.8,14.4,31.3,14.4c12.5,0,23.7-5.6,31.3-14.4
		c0-0.1,0-0.2,0-0.3C69.5,49.5,55.5,40.9,38.1,40.9z"
              />
            </g>
          </svg>
          <div style={{ color: "#fff" }}>
            <h2> KEN R. ADCOCK</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
            <p style={{ textDecoration: "underline" }}>Read More</p>
          </div>
        </div>
      </div>
      <div className={styles.bp}>
        <div className={styles.person}>
          <svg
            version="1.1"
            width="12rem"
            id="Isolation_Mode"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 82 82"
            enableBackground="new 0 0 82 82"
            space="preserve"
            fill="#fff"
          >
            <g>
              <circle cx="38.1" cy="19.7" r="15.8" />
              <path
                d="M38.1,40.9c-17.3,0-31.4,8.6-31.4,19.2c0,0.1,0,0.2,0,0.3c7.6,8.8,18.8,14.4,31.3,14.4c12.5,0,23.7-5.6,31.3-14.4
		c0-0.1,0-0.2,0-0.3C69.5,49.5,55.5,40.9,38.1,40.9z"
              />
            </g>
          </svg>
          <div style={{ color: "#fff" }}>
            <h2> WILL C. IVISION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
            <p style={{ textDecoration: "underline" }}>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owners;
