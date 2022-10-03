import React from "react";
import Nav from "../components/Nav";
import BusinessHead from "../components/BusinessHead";
import styles from "../styles/Business.module.css";
import { config } from "../components/Constants";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const URL = config.url;

const business = () => {
  const [businesstext, setbusinesstext] = useState(null);
  const [loadbusinesstext, setloadbusinesstext] = useState(true);
  useEffect(() => {
    fetch(`${URL}/business`)
      .then((res) => res.json())
      .then((businesstext) => {
        setbusinesstext(businesstext);
        setloadbusinesstext(false);
      });
  }, []);

  const [businessdrops, setbusinessdrops] = useState(null);
  const [loadbusinessdrops, setloadbusinessdrops] = useState(true);
  useEffect(() => {
    fetch(`${URL}/business-drops?sort=id`)
      .then((res) => res.json())
      .then((businessdrops) => {
        setbusinessdrops(businessdrops);
        setloadbusinessdrops(false);
      });
  }, []);

  const [showDropdown, setShowDropdown] = useState(1);

  if (loadbusinessdrops) {
    return <div>loading...</div>;
  }
  
  if (loadbusinesstext) {
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
      <BusinessHead />
      <Nav />
      <div className={styles.main}>
        <div className={styles.sec1}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 174 153"
            enableBackground="new 0 0 174 153"
            space="preserve"
            fill="#002d62"
            width="12rem"
          >
            <path
              d="M50,112c-2.8,0-5-2.2-5-5V92c0-2.8,2.2-5,5-5h5c2.8,0,5,2.2,5,5v15c0,2.8-2.2,5-5,5H50z M130,99.2v7.8c0,5.5-4.5,10-10,10
		h-5c-5.5,0-10-4.5-10-10v-4.7c-6.2,0.4-12.8,0.7-20,0.7c-7.2,0-13.8-0.3-20-0.7v4.7c0,5.5-4.5,10-10,10h-5c-5.5,0-10-4.5-10-10v-7.8
		c-7.6-1.4-13.9-2.9-18.8-4.4c-4.2-1.3-8-3.4-11.2-6.2V127c0,8.3,6.7,15,15,15h120c8.3,0,15-6.7,15-15V88.7
		c-3.2,2.7-6.9,4.8-11.2,6.1C143.9,96.3,137.6,97.8,130,99.2z M165,47v18.1c0,11.1-7.3,20.8-17.9,24c-4.7,1.4-10.4,2.8-17.1,4.1V92
		c0-5.5-4.5-10-10-10h-5c-5.5,0-10,4.5-10,10v4.3C98.8,96.7,92.2,97,85,97c-7.2,0-13.8-0.3-20-0.7V92c0-5.5-4.5-10-10-10h-5
		c-5.5,0-10,4.5-10,10v1.1c-6.7-1.2-12.4-2.7-17.1-4.1C12.3,85.9,5,76.2,5,65.1V47c0-8.3,6.7-15,15-15h20c0-2.8,2.2-5,5-5h5
		c0-11,9-20,20-20h30c11,0,20,9,20,20h5c2.8,0,5,2.2,5,5h20C158.3,32,165,38.7,165,47z M65,27v5h40v-5c0-2.8-2.2-5-5-5H70
		C67.2,22,65,24.2,65,27z M120,112c2.8,0,5-2.2,5-5V92c0-2.8-2.2-5-5-5h-5c-2.8,0-5,2.2-5,5v15c0,2.8,2.2,5,5,5H120z"
            />
          </svg>
          <div className={styles.sec1Txt}>
            <h3>{businesstext.data.attributes.title}</h3>
            <p>
              <ReactMarkdown>
                {businesstext.data.attributes.content}
              </ReactMarkdown>
            </p>
          </div>
        </div>
        <div className={styles.dropdowns}>
        {businessdrops.data.map((drop) => {
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
                    <p>
                      <ReactMarkdown>{drop.attributes.content}</ReactMarkdown>
                    </p>
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

export default business;
