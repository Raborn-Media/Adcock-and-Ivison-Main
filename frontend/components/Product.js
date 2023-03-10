import React from "react";
import styles from "../styles/Home.module.css";
import { config } from "../components/Constants";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const URL = config.url;

const Product = () => {
  const [claimsDrop, setclaimsdrop] = useState(null);
  const [loadclaimsdrop, setloadclaimsdrop] = useState(true);
  useEffect(() => {
    fetch(`${URL}/claim-drops`)
      .then((res) => res.json())
      .then((claimsdrop) => {
        setclaimsdrop(claimsdrop);
        setloadclaimsdrop(false);
      });
  }, []);

  const [injuryDrop, setinjurydrop] = useState(null);
  const [loadinjurydrop, setloadinjurydrop] = useState(true);
  useEffect(() => {
    fetch(`${URL}/injury-drops`)
      .then((res) => res.json())
      .then((injurydrop) => {
        setinjurydrop(injurydrop);
        setloadinjurydrop(false);
      });
  }, []);

  const [medicalsDrop, setmedicalsdrop] = useState(null);
  const [loadmedicalsdrop, setloadmedicalsdrop] = useState(true);
  useEffect(() => {
    fetch(`${URL}/medical-drops`)
      .then((res) => res.json())
      .then((medicalsdrop) => {
        setmedicalsdrop(medicalsdrop);
        setloadmedicalsdrop(false);
      });
  }, []);

  const [businessDrop, setbusinessdrop] = useState(null);
  const [loadbusinessdrop, setloadbusinessdrop] = useState(true);
  useEffect(() => {
    fetch(`${URL}/business-drops`)
      .then((res) => res.json())
      .then((businessdrop) => {
        setbusinessdrop(businessdrop);
        setloadbusinessdrop(false);
      });
  }, []);

  const [insuranceDrop, setinsurancedrop] = useState(null);
  const [loadinsurancedrop, setloadinsurancedrop] = useState(true);
  useEffect(() => {
    fetch(`${URL}/insurance-drops`)
      .then((res) => res.json())
      .then((insurancedrop) => {
        setinsurancedrop(insurancedrop);
        setloadinsurancedrop(false);
      });
  }, []);

  const [content, setContent] = useState(1)

  setTimeout(() => {
    if (content == 5) {
      setContent(1)
    } else {
      setContent(content + 1);
    }
  }, 10000);

  if (loadclaimsdrop || loadinjurydrop || loadbusinessdrop || loadmedicalsdrop || loadinsurancedrop) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles.capsec}>
      <style jsx>{`
        .animated {
          animation-name: fadeIn;
          animation-duration: 10s;
        }
        @keyframes fadeIn {
          0% {opacity: 0;}
          5% {opacity: 1;}
          95% {opacity: 1;}
          100% {opacity: 0;}
        }
      `}</style>
      <div className={styles.capitol}>
        <svg
          width="16rem"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 199 227"
          enableBackground="new 0 0 199 227"
          space="preserve"
          fill="#979794"
        >
          <g>
            <path
              d="M142.4,108C137.9,63,108,62.3,108,57.7c0-1.4-0.2-9,0.1-9.8c1.8-0.6,5.9-8-2.9-10.8c-1.3-0.3-3.5-2.2-3.6-14.7
		c0.4-1.4,1-2,1.1-3.8c0.2-2.5-1.8-3.4-1.5-5.6c0.5-3.3-1.8-3.4-1.8-5.7c-0.2,0-0.4-0.1-0.5-0.1h-0.2c-0.1,0-0.2,0-0.4,0.1
		c0,2.3-2.2,2.5-1.8,5.7c0.3,2.2-1.7,3.2-1.5,5.6c0.1,1.8,0.8,2.4,1.1,3.8C96.2,35,94,36.9,92.7,37.2C83.9,39.9,88,47.3,89.8,48
		c0.3,0.8,0.1,8.3,0.1,9.8c0,4.5-29.5,5.3-34.3,49.6C79.3,96.2,119,96.2,142.4,108z"
            />
            <path
              d="M167.1,203.9c0-14.4,0.1-30.9,0.1-32.6c4.3-3,2.2-8.6,0-11.5c-3.9-3.9-8.8-7.3-14.6-10.2c0-5.1,0.2-17.2,0.2-20.4
		c3.4-2.4,1.7-6.8,0-9.1c-21.6-22.1-87.5-22.1-109.1,0c-1.7,2.2-3.4,6.7,0,9.1c0.1,3.2,0.2,15.3,0.2,20.4
		c-5.8,2.8-10.7,6.2-14.6,10.2c-2.2,2.8-4.3,8.5,0,11.5c0,1.8,0.1,18.3,0.1,32.8L7.2,216.8h19.1l24.8-14L98.5,176l47.4,26.8l24.8,14
		h19.1L167.1,203.9z M43.5,196.3l-6.4,3.6v-25.1c0-6.1,6.4-5.8,6.4,0.3V196.3z M95,120.8c0-4.9,6.5-4.7,6.5,0.3V139
		c-2.2,0-4.3,0-6.5,0V120.8z M49.8,132.1c0-4.8,5.1-4.6,5.1,0.2v13c-1.7,0.6-3.4,1.2-5.1,1.8V132.1z M57.1,188.6l-7,3.9v-23.8
		c0-6.3,7-6,7,0.3V188.6z M60.2,127.3c0-5,5.5-4.8,5.5,0.2v14.9c-1.9,0.4-3.7,0.9-5.5,1.4V127.3z M71.6,180.4l-7.2,4.1v-20.4
		c0-6.3,7.2-6,7.2,0.4V180.4z M77.2,140.3c-1.9,0.3-3.8,0.6-5.7,0.9v-17.6c0-5,5.7-4.7,5.7,0.3V140.3z M86.8,171.8l-7.7,4.3v-14.6
		c0-5.8,7.7-5.5,7.7,0.3V171.8z M89.2,139.2c-2,0.1-4,0.3-6.1,0.5v-18.1c0-4.6,6.1-4.4,6.1,0.3V139.2z M102.4,167.4l-1.8-1l-2.1-1.2
		l-2.1,1.2l-2.2,1.3v-7.1c0-6.2,8.2-5.9,8.2,0.3V167.4z M107.5,121.7c0-4.6,6.1-4.9,6.1-0.3v18.2c-2-0.2-4-0.3-6.1-0.5V121.7z
		 M117.5,175.9l-7.7-4.3v-10c0-5.8,7.7-6.2,7.7-0.3V175.9z M119.5,123.8c0-5,5.7-5.3,5.7-0.3v17.7c-1.9-0.3-3.8-0.6-5.7-0.9V123.8z
		 M132.3,184.3l-7.2-4.1v-15.9c0-6.3,7.2-6.7,7.2-0.4V184.3z M136.5,143.7c-1.8-0.5-3.6-1-5.5-1.4v-15c0-5,5.5-5.2,5.5-0.2V143.7z
		 M146.5,192.3l-7-3.9v-19.5c0-6.3,7-6.6,7-0.3V192.3z M146.8,147.2c-1.6-0.6-3.3-1.3-5.1-1.8v-8.5c0-4.8,5.1-5,5.1-0.2V147.2z
		 M159.6,199.7l-6.4-3.6v-21.2c0-6.1,6.4-6.4,6.4-0.3V199.7z"
            />
            <path
              d="M107.6,197.9c-0.5-1.3-1.2-2.4-2.1-3.4v0l0,0h0c-0.9-1-2-1.7-3.2-2.3h0c-1.2-0.5-2.4-0.8-3.8-0.8c-1.3,0-2.6,0.3-3.8,0.8h0
		c-1.2,0.5-2.3,1.3-3.2,2.3h0l0,0v0c-0.9,1-1.6,2.1-2.1,3.4h0c-0.5,1.2-0.8,2.6-0.8,4c0,1.4,0.3,2.8,0.8,4v0
		c0.5,1.3,1.2,2.4,2.1,3.4v0l0,0h0c0.9,1,2,1.7,3.2,2.3h0c1.2,0.5,2.4,0.8,3.8,0.8c1.3,0,2.6-0.3,3.8-0.8h0c1.2-0.5,2.3-1.3,3.2-2.3
		h0l0,0v0c0.9-1,1.6-2.1,2.1-3.4v0c0.5-1.2,0.8-2.6,0.8-4C108.3,200.5,108.1,199.2,107.6,197.9L107.6,197.9z M103.1,204
		c-0.3,0.6-0.6,1.2-1.1,1.7h0l0,0v0c-0.5,0.5-1,0.9-1.6,1.2c-0.6,0.3-1.2,0.4-1.9,0.4c-0.7,0-1.3-0.1-1.9-0.4
		c-0.6-0.3-1.1-0.6-1.6-1.1l0,0l0,0c-0.5-0.5-0.8-1.1-1.1-1.7c-0.2-0.6-0.4-1.3-0.4-2s0.1-1.4,0.4-2c0.3-0.6,0.6-1.2,1.1-1.7l0,0
		l0,0c0.4-0.5,1-0.9,1.6-1.1c0.6-0.3,1.2-0.4,1.9-0.4c0.7,0,1.3,0.1,1.9,0.4c0.6,0.3,1.2,0.7,1.6,1.1v0l0,0h0
		c0.5,0.5,0.8,1.1,1.1,1.7c0.2,0.6,0.4,1.3,0.4,2S103.3,203.4,103.1,204z"
            />
          </g>
        </svg>
      </div>
      <div className={styles.prosec}>
        <div className={styles.product}>
          {content == 1 && (
            <>
              <h4 style={{ margin: "0" }} className={content == 1?"animated":'animateOut'}>
                Employment Claims
              </h4>
              {claimsDrop.data.map((claim) => {
                return (
                  <div
                    key={claim.id}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: "2rem",
                    }}
                    className={content == 1?"animated":'animateOut'}
                  >
                    &bull;&nbsp;
                    <ReactMarkdown>{claim.attributes.title}</ReactMarkdown>
                  </div>
                );
              })}
              <div className={styles.learn}>
                <Link href={"/claims"}>
                  <p style={{ cursor: "pointer" }} className={content == 1?"animated":'animateOut'}>
                    Learn More
                  </p>
                </Link>
              </div>
            </>
          )}
          {content == 2 && (
            <>
              <h4 style={{ margin: "0" }} className={content == 2?"animated":'animateOut'}>
                Personal Injury
              </h4>
              {injuryDrop.data.map((injury) => {
                return (
                  <div
                    key={injury.id}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: "2rem",
                    }}
                    className={content == 2?"animated":'animateOut'}
                  >
                    &bull;&nbsp;
                    <ReactMarkdown>{injury.attributes.title}</ReactMarkdown>
                  </div>
                );
              })}
              <div className={styles.learn}>
                <Link href={"/injury"}>
                  <p style={{ cursor: "pointer" }} className={content == 2?"animated":'animateOut'}>
                    Learn More
                  </p>
                </Link>
              </div>
            </>
          )}
          {content == 3 && (
            <>
              <h4 style={{ margin: "0" }} className={content == 3?"animated":'animateOut'}>
                Medical
              </h4>
              {medicalsDrop.data.map((medical) => {
                return (
                  <div
                    key={medical.id}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: "2rem",
                    }}
                    className={content == 3?"animated":'animateOut'}
                  >
                    &bull;&nbsp;
                    <ReactMarkdown>{medical.attributes.title}</ReactMarkdown>
                  </div>
                );
              })}
              <div className={styles.learn}>
                <Link href={"/medical"}>
                  <p style={{ cursor: "pointer" }} className={content == 3?"animated":'animateOut'}>
                    Learn More
                  </p>
                </Link>
              </div>
            </>
          )}
          {content == 4 && (
            <>
              <h4 style={{ margin: "0" }} className={content == 4?"animated":'animateOut'}>
                Business
              </h4>
              {businessDrop.data.map((business) => {
                return (
                  <div
                    key={business.id}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: "2rem",
                    }}
                    className={content == 4?"animated":'animateOut'}
                  >
                    &bull;&nbsp;
                    <ReactMarkdown>{business.attributes.title}</ReactMarkdown>
                  </div>
                );
              })}
              <div className={styles.learn}>
                <Link href={"/business"}>
                  <p style={{ cursor: "pointer" }} className={content == 4?"animated":'animateOut'}>
                    Learn More
                  </p>
                </Link>
              </div>
            </>
          )}
          {content == 5 && (
            <>
              <h4 style={{ margin: "0" }} className={content == 5?"animated":'animateOut'}>
                Insurance
              </h4>
              {insuranceDrop.data.map((insurance) => {
                return (
                  <div
                    key={insurance.id}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: "2rem",
                    }}
                    className={content == 5?"animated":'animateOut'}
                  >
                    &bull;&nbsp;
                    <ReactMarkdown>{insurance.attributes.title}</ReactMarkdown>
                  </div>
                );
              })}
              <div className={styles.learn}>
                <Link href={"/insurance"}>
                  <p style={{ cursor: "pointer" }} className={content == 5?"animated":'animateOut'}>
                    Learn More
                  </p>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
