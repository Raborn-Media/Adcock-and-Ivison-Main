import React from "react";
import Nav from "../components/Nav";
import InjuryHead from "../components/InjuryHead";
import styles from "../styles/Injury.module.css";
import { config } from "../components/Constants";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const URL = config.url;

const injury = () => {
  const [injurytext, setinjurytext] = useState(null);
  const [loadinjurytext, setloadinjurytext] = useState(true);
  useEffect(() => {
    fetch(`${URL}/personal-injury`)
      .then((res) => res.json())
      .then((injurytext) => {
        setinjurytext(injurytext);
        setloadinjurytext(false);
      });
  }, []);

  const [injurydrops, setinjurydrops] = useState(null);
  const [loadinjurydrops, setloadinjurydrops] = useState(true);
  useEffect(() => {
    fetch(`${URL}/injury-drops?sort=id&populate=*`)
      .then((res) => res.json())
      .then((injurydrops) => {
        setinjurydrops(injurydrops);
        setloadinjurydrops(false);
      });
  }, []);

  const [showDropdown, setShowDropdown] = useState(1);

  if (loadinjurytext) {
    return <div>loading...</div>;
  }

  if (loadinjurydrops) {
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
      <InjuryHead />
      <Nav />
      <div className={styles.main}>
        <div className={styles.sec1}>
          <svg
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 87.2 71.2"
            enableBackground="new 0 0 87.2 71.2"
            space="preserve"
            fill="#002d62"
            width="12rem"
          >
            <g>
              <path
                fill="#002d62"
                d="M73.3,41.7c-3.7-2.6-17-8.3-17-8.3c-0.9-0.4-2-0.6-2.7-0.2L39,41l-5.8-10.6c4-1.1,8.6-2.4,9.8-3.6
			c2.3-2.1,7.6-9.5,7.6-9.5c0.9-1.1,0.5-2.6-0.7-3.7c-2-1.7-3.6-0.2-3.6-0.2l-9,8.1l-10.8,1.9c-1.7,0.3-3.1,0.3-5,2
			c-2.1,1.9-8.4,12.4-9.5,14.2c-0.7,1.2-0.5,2.2,0.3,3.6l7.5,12c0,0,1.3,2.6,4,1.1c0.8-0.4,2.4-1.8,1.5-3.9l-4.7-11.1l1.4-2.1
			c0,0,6,9.8,8.3,13.1c1.3,1.8,3.6,3.3,7.1,2.9c1.7,0,4.4-1.1,6.1-2.4c2.7-2.1,12.2-9.4,12.2-9.4l13.6,4.5c0,0,2.5,1.1,4.2-1.7
			C74.3,45,74.5,42.6,73.3,41.7z"
              />
              <path
                fill="#002d62"
                d="M64.4,66.3c2.5-2.6,0.8-4.4,0.8-4.4l-10-14.1l-7.6,5.8l12.5,13.4C60.1,67.1,62.2,68.6,64.4,66.3z"
              />
              <path
                fill="#002d62"
                d="M22.8,22.1c4.7,0,8.5-3.8,8.5-8.5c0-4.7-3.8-8.5-8.5-8.5c-4.7,0-8.5,3.8-8.5,8.5
			C14.3,18.3,18.1,22.1,22.8,22.1z"
              />
              <path
                fill="#002d62"
                d="M45.2,10.1c2-1.7,5.1-1.5,6.9,0.6c0.2,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.8-0.3c0.5-0.4,0.6-1.2,0.1-1.8
			C51.3,6,46.7,5.6,43.6,8.2C43,8.7,43,9.4,43.4,10C43.9,10.5,44.7,10.6,45.2,10.1z"
              />
              <path
                fill="#002d62"
                d="M8.5,48.4c0.2,0.1,0.4,0.2,0.6,0.2c0.4,0,0.8-0.2,1.1-0.6c0.3-0.6,0.1-1.4-0.4-1.7c-1-0.6-1.8-1.6-2.1-2.8
			c-0.3-1.2-0.1-2.4,0.5-3.4c0.3-0.6,0.1-1.4-0.4-1.7C7.1,38,6.3,38.2,6,38.8c-1,1.6-1.2,3.5-0.7,5.3C5.7,45.9,6.9,47.5,8.5,48.4z"
              />
              <path
                fill="#002d62"
                d="M73.1,35.5C73.1,35.5,73.1,35.5,73.1,35.5c-0.7,0-1.3,0.6-1.3,1.2c0,0.7,0.5,1.3,1.2,1.3
			c1.1,0,2.1,0.4,2.8,1.2C76.6,40,77,41,77,42c0,0.7,0.5,1.3,1.2,1.3c0,0,0,0,0,0c0.7,0,1.2-0.6,1.2-1.2c0-1.7-0.6-3.4-1.9-4.6
			C76.4,36.2,74.8,35.5,73.1,35.5z"
              />
            </g>
          </svg>
          <div className={styles.sec1Txt}>
            <h3>{injurytext.data.attributes.title}</h3>
            <p dangerouslySetInnerHTML={{__html: injurytext.data.attributes.content}}></p>
          </div>
        </div>
        <div className={styles.dropdowns}>
          {injurydrops.data.map((drop) => {
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
                      <span>{drop.attributes.title}</span>
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

export default injury;
