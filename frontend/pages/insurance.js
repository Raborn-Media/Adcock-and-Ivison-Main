import React from "react";
import Nav from "../components/Nav";
import InsuranceHead from "../components/InsuranceHead";
import styles from "../styles/Insurance.module.css";
import { config } from "../components/Constants";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const URL = config.url;

const insurance = () => {
  const [insurancetext, setinsurancetext] = useState(null);
  const [loadinsurancetext, setloadinsurancetext] = useState(true);
  useEffect(() => {
    fetch(`${URL}/insurance`)
      .then((res) => res.json())
      .then((insurancetext) => {
        setinsurancetext(insurancetext);
        setloadinsurancetext(false);
      });
  }, []);

  const [insurancedrops, setinsurancedrops] = useState(null);
  const [loadinsurancedrops, setloadinsurancedrops] = useState(true);
  useEffect(() => {
    fetch(`${URL}/insurance-drops?sort=id&populate=*`)
      .then((res) => res.json())
      .then((insurancedrops) => {
        setinsurancedrops(insurancedrops);
        setloadinsurancedrops(false);
      });
  }, []);

  const [showDropdown, setShowDropdown] = useState(1);

  if (loadinsurancetext) {
    return <div>loading...</div>;
  }

  if (loadinsurancedrops) {
    return <div>loading...</div>;
  }

  function displayDropdown(id) {
    if (showDropdown == id) {
      setShowDropdown(0);
    } else {
      setShowDropdown(id);
    }
  }

  return (
    <>
      <InsuranceHead />
      <Nav />
      <div className={styles.main}>
        <div className={styles.sec1}>
          <svg
            version="1.1"
            id="_x31_"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 204 232"
            enableBackground="new 0 0 204 232"
            space="preserve"
            fill="#002d62"
            width="12rem"
          >
            <g>
              <path
                fill="#002d62"
                d="M171.4,83.1c-1.9,22-5.1,39.5-11.6,54.7c-9.4,22.3-27,40.9-57.3,62.1l-8.4,11.7l8.4,13.8l6.3-4.2
			c37.9-25.5,58.7-47.2,70.6-75.2c10.9-25.8,13.7-55.8,15.2-98.7L171.4,83.1z"
              />
              <path
                fill="#002d62"
                d="M144.3,25.5c-11.3-2.7-22.2-7.7-36.1-15.7l-5.7-3.3L97.4,21l5.1,10c13.5,7.5,24.8,12.4,36.8,15.2
			c5.3,1.3,10.6,2.1,16.3,2.6L102,131.4L72.4,88.2H46.6l46.9,68.4l9,13.1l8.7-13.4l84-129.5l-11.6,0.8
			C170.5,28.5,157.1,28.6,144.3,25.5z"
              />
              <path
                fill="#002d62"
                d="M21.4,27.6c16,1,28.1,0.6,39.3-2.1C72,22.8,83,17.8,96.8,9.8l5.7-3.3V31C89,38.5,77.7,43.4,65.7,46.2
			c-10.4,2.5-21.1,3.4-33.9,3.1c1.4,38.9,4,66.2,13.4,88.4c9.4,22.3,27,40.9,57.3,62.1v25.5l-6.3-4.2C58.3,195.7,37.5,174,25.6,146
			C14,118.5,11.6,86.1,10.2,38.5L9.8,26.9L21.4,27.6z"
              />
            </g>
          </svg>
          <div className={styles.sec1Txt}>
            <h3>{insurancetext.data.attributes.title}</h3>
            <p dangerouslySetInnerHTML={{__html: insurancetext.data.attributes.content}}></p>
          </div>
        </div>
        <div className={styles.dropdowns}>
          {insurancedrops.data.map((drop) => {
            return (
              <>
                <div className={styles.spacer}>
                  <div
                    className={styles.attorneybar}
                    onClick={() => displayDropdown(drop.id)}
                  >
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 164 133"
                      enableBackground="new 0 0 164 133"
                      space="preserve"
                      fill="#fff"
                      width={50}
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="0.4613"
                        strokeMiterlimit="10"
                        d="M102.7,70c0,11.6,11.9,21,26.7,21c14.7,0,26.7-9.4,26.7-21
                      c-0.8,0-1.5,0-2.3,0l-19.4-37.4c2-1.4,3.3-3.7,3.3-6.3c0-4.2-3.4-7.6-7.6-7.6l-42.2-7.2c-0.7-0.2-1.4-0.4-2.1-0.4
                      c-0.7,0-1.4,0.1-2.1,0.4l-42.8,7.2c-4.2,0-7.6,3.4-7.6,7.6c0,3.5,2.4,6.5,5.7,7.3L15.9,70c-0.5,0-1,0-1.5,0c0,11.6,11.9,21,26.7,21
                      c14.7,0,26.7-9.4,26.7-21c-0.8,0-1.5,0-2.3,0L46.7,33.9h32.1l-2.7,70.9c0,0-30.5,4.7-30.5,10.6S36.4,126,42.2,126h86.6
                      c5.8,0-3.5-4.7-3.5-10.6s-30.1-10.6-30.1-10.6l-2.6-70.9h34.3l-23,36.1C103.7,70,103.2,70,102.7,70z M20.3,70l22.5-35.4L61.1,70
                      C47.6,70,34.1,70,20.3,70z M131.1,34.7L149.4,70c-13.6,0-27,0-40.8,0L131.1,34.7z"
                      />
                    </svg>
                    <div style={{ marginLeft: "0.8rem" }}>
                      <p>{drop.attributes.title}</p>
                    </div>
                    {showDropdown == drop.id ? (
                      <p className={styles.dropStatus}>CLOSE</p>
                    ) : (
                      <p className={styles.dropStatus}>OPEN</p>
                    )}
                  </div>
                </div>
                {showDropdown == drop.id && (
                  <div className={styles.dropBody}>
                    <img src={drop.attributes.image.data.attributes.url} alt="Claims" className={styles.dropImg} />
                    <p dangerouslySetInnerHTML={{__html: drop.attributes.content}}></p>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default insurance;
