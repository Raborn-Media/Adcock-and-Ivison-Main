import React from "react";
import styles from "../styles/Home.module.css";
import { config } from "../components/Constants";
import { useEffect, useState } from "react";

const URL = config.url;

const InjuryHead = () => {
  const [injuryheader, setinjuryheader] = useState(null);
  const [loadinjuryheader, setloadinjuryheader] = useState(true);
  useEffect(() => {
    fetch(`${URL}/personal-injury-header`)
      .then((res) => res.json())
      .then((injuryheader) => {
        setinjuryheader(injuryheader);
        setloadinjuryheader(false);
      });
  }, []);

  if (loadinjuryheader) {
    return <div>loading...</div>;
  }

  return (
    <div
      className={styles.back}
      style={{
        backgroundImage: "url('/personal_injury.jpg')",
        backgroundPosition: "center top 50%",
        backgroundSize: "100%",
      }}
    >
      <div className={styles.text} style={{animation: 'unset'}}>
        <div>
          <h1
            dangerouslySetInnerHTML={{
              __html: injuryheader.data.attributes.largeText,
            }}
          ></h1>
          <p
            dangerouslySetInnerHTML={{
              __html: injuryheader.data.attributes.smallText,
            }}
          ></p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <p
            dangerouslySetInnerHTML={{
              __html: injuryheader.data.attributes.subHeader,
            }}
          ></p>
        </div>
      </div>
      <div style={{ margin: "0" }} className={styles.aiLogo}>
        <svg
          version="1.1"
          id="Isolation_Mode"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 97.1 66.1"
          enableBackground="new 0 0 97.1 66.1"
          space="preserve"
          fill="#fff"
          width="24rem"
          style={{ marginBottom: "-1.04rem", marginRight: "-0.8rem" }}
        >
          <path
            d="M78,52.9c0-13.1,0-26.2,0-39.4c0-1.1,0.1-2.3,0.3-3.4c0.2-2,1.4-3.3,3.4-3.7c1.5-0.3,3-0.5,4.5-0.7c0-0.9,0-1.6,0-2.2
	c-8.1,0-16.1,0-24.1,0c-0.3,2.3-0.3,2.3,1.9,2.6c0.8,0.1,1.6,0.2,2.3,0.3c2.6,0.6,3.5,1.7,3.8,4.4c0.1,1.3,0.2,2.7,0.2,4
	c0,12.3,0,24.7,0,37c0,1.4,0.1,2.8-0.2,4.1c-0.3,1.3-0.9,2.8-1.9,3.5c-3.7,2.6-10,0.9-12.2-3c-0.6-1.2-1.2-2.4-1.6-3.6
	c-0.7-1.9-1.4-3.9-2.1-5.8c-4.2-0.2-6.5-3.7-6.5-7c0-2.1,0.8-3.4,2.2-4.7c-3.6-9.9-7.1-19.8-10.7-29.6c-0.4-1.2-0.9-2.3-1.3-3.4
	c-2.1,0.1-3.1,1-3.8,2.8c-3.8,10-7.8,20-11.8,30c-2.7,6.9-5.5,13.8-8.3,20.6c-1.1,2.8-3.3,4.4-6.3,4.7c-0.7,0.1-1.2,0.3-1.6,0.6V63
	c6.5,0,13,0,19.6,0c0-0.8,0-1.6,0-2.3c-1.1-0.2-2-0.3-3-0.4c-3.4-0.6-4.3-1.9-3.3-5.2c1.3-4.2,2.7-8.4,4.2-12.5
	c0.2-0.5,1-1.1,1.5-1.1c5.8-0.1,11.6-0.1,17.4,0c0.5,0,1.2,0.4,1.4,0.8c1.7,4.8,3.5,9.5,5.1,14.3c0.6,1.8,0,2.8-1.8,3.3
	c-1.2,0.4-2.5,0.5-3.7,0.8c0,0.8,0,1.6,0,2.3c15,0,37,0,51.9,0c0-0.8,0-1.7,0-2.4c-0.6-0.1-8.3,0-8.9-0.1C78.8,59.7,78,58.8,78,52.9
	z M23.5,37.3c2.8-7.7,5.6-15.3,8.4-23c0.2,0,0.3-0.1,0.5-0.1c2.6,7.6,5.3,15.2,8,23C34.7,37.3,29.2,37.3,23.5,37.3z"
          />
          <path
            d="M67.1,32.2c-1.1,0.2-2,0.9-3.1,2.5c-0.9,1.3-1.6,2.5-2.7,4.3c3.1,3.5,4.2,5.2,5.4,7.4l-0.2,0.4c-3.2,0-5.4-0.8-6.2-1.7
	c-0.3-0.3-0.9-1-1.9-2.1c-1.6,2.1-3.4,3.5-5.9,3.5c-4.2,0-6.4-3.5-6.4-6.7c0-2.7,1.3-3.9,4.1-6c-1.1-1.2-2-2.8-2-4.8
	c0-3.6,2.6-6.4,6-6.4s5.5,2.4,5.5,5.8c0,1.1-0.4,2.1-1.4,2.9c-0.6,0.6-1.2,1.1-2.4,2c1.3,1.3,2.8,2.8,4.3,4.5
	c0.9-1.7,1.5-2.6,1.9-3.6c0.5-1.2,0.4-1.7-0.7-2l-0.8-0.2v-1.5h7.5v1.5L67.1,32.2z M57.4,41.9c-1.8-2.1-3.6-4-6.2-7
	c-0.4,0.7-0.6,1.6-0.6,2.7c0,3.3,2,5.4,4.2,5.4C56.1,42.9,57,42.4,57.4,41.9z M51.8,27.3c0,1.7,1,3.1,3.1,5c0.9-1,1.3-2.5,1.3-4.2
	c0-2.1-1.1-3.8-2.4-3.8C52.7,24.3,51.8,25.6,51.8,27.3z"
          />
        </svg>
      </div>
    </div>
  );
};

export default InjuryHead;
