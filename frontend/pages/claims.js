import React from "react";
import Nav from "../components/Nav";
import ClaimsHead from "../components/ClaimsHead";
import styles from "../styles/Claims.module.css";
import { config } from "../components/Constants";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const URL = config.url;

const claims = () => {
  const [showDropdown, setShowDropdown] = useState(1);

  const [claimtext, setclaimtext] = useState(null);
  const [loadclaimtext, setloadclaimtext] = useState(true);
  useEffect(() => {
    fetch(`${URL}/employment-claim`)
      .then((res) => res.json())
      .then((claimtext) => {
        setclaimtext(claimtext);
        setloadclaimtext(false);
      });
  }, []);

  const [claimdrops, setclaimdrops] = useState(null);
  const [loadclaimdrops, setloadclaimdrops] = useState(true);
  useEffect(() => {
    fetch(`${URL}/claim-drops?sort=id`)
      .then((res) => res.json())
      .then((claimdrops) => {
        setclaimdrops(claimdrops);
        setloadclaimdrops(false);
      });
  }, []);

  if (loadclaimdrops) {
    return <div>loading...</div>;
  }

  if (loadclaimtext) {
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
      <ClaimsHead />
      <Nav />
      <div className={styles.main}>
        <div className={styles.sec1}>
          <svg
            version="1.1"
            id="Isolation_Mode"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 297.4 334.6"
            enableBackground="new 0 0 297.4 334.6"
            space="preserve"
            fill="#002d62"
            width="12rem"
          >
            <g>
              <ellipse
                transform="matrix(0.9571 -0.2898 0.2898 0.9571 -7.5346 45.1493)"
                cx="148.7"
                cy="48"
                rx="28.7"
                ry="28.7"
              />
              <path
                d="M175.7,84.6h-26.9h-26.9c-28.9,0-29.7,17-28.9,37.3l3.1,56.9l16.7,17.2l9.6,103.7c0.6,5.4,4.4,9.4,8.8,9.4h17.6h17.6
			c4.4,0,8.2-4,8.8-9.4l9.6-103.7l16.7-17.2l3.1-56.9C205.4,101.6,201.9,84.6,175.7,84.6z"
              />
              <g>
                <path
                  d="M76.9,122.6l0-0.1c-0.4-10.6-1.1-26,7.3-37.9c-3.4-2.1-7.4-3.2-11.6-3.2c-12.4,0-22.5,10.1-22.5,22.5
				c0,12.4,10.1,22.5,22.5,22.5c1.5,0,3.1-0.2,4.5-0.5l-0.2-3.2L76.9,122.6z"
                />
              </g>
              <g>
                <path
                  d="M84.6,190l-4.2-4.3l-0.3-6l-2.6-47.1h-6.2H50.2c-22.7,0-23.3,13.3-22.6,29.2l2.5,44.7L43.1,220l7.5,81.3
				c0.5,4.2,3.4,7.4,6.9,7.4h13.8h13.8c3.5,0,6.4-3.1,6.9-7.4l7.2-78l-1.9-20.2L84.6,190z"
                />
              </g>
              <g>
                <path
                  d="M220.5,122.5l0,0.1l0,0.1l-0.1,2.5c2.2,0.7,4.6,1.1,7.1,1.1c12.4,0,22.5-10.1,22.5-22.5c0-12.4-10.1-22.5-22.5-22.5
				c-5.3,0-10.3,1.9-14.1,5C220.5,97.5,221,111.3,220.5,122.5z"
                />
              </g>
              <g>
                <path
                  d="M247.3,132.6h-21.1H220l-2.6,47.1l-0.3,6l-4.2,4.3l-12.8,13.2l-1.9,20.3l7.2,77.9c0.5,4.2,3.4,7.4,6.9,7.4h13.8h13.8
				c3.5,0,6.4-3.1,6.9-7.4l7.5-81.3l13.1-13.5l2.5-44.7C270.6,145.9,267.9,132.6,247.3,132.6z"
                />
              </g>
            </g>
          </svg>
          <div className={styles.sec1Txt}>
            <h3>{claimtext.data.attributes.title}</h3>
            <p dangerouslySetInnerHTML={{__html: claimtext.data.attributes.content}}>
            </p>
          </div>
        </div>
        <div className={styles.dropdowns}>
          {claimdrops.data.map((drop) => {
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

export default claims;
