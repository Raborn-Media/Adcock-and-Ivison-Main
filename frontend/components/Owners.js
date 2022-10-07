import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image"
import { config } from "../components/Constants";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const URL = config.url;

const Owners = () => {
  const [attorneys, setattorneys] = useState(null);
  const [loadattorneys, setloadattorneys] = useState(true);
  useEffect(() => {
    fetch(`${URL}/attorneys?populate=*&sort=id`)
      .then((res) => res.json())
      .then((attorneys) => {
        setattorneys(attorneys);
        setloadattorneys(false);
      });
  }, []);

  if (loadattorneys) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles.owners}>
      {attorneys.data.map((attorney) => {
        return (
          <div className={styles.bp}>
            <div className={styles.person}>
            <Image src={attorney.attributes.headshot.data.attributes.url} width={200} height={200} />
              <div style={{ color: "#fff" }}>
                <h2>
                  {attorney.attributes.firstName}{" "}
                  {attorney.attributes.middleInitial}{" "}
                  {attorney.attributes.lastName}
                </h2>
                <p dangerouslySetInnerHTML={{__html: attorney.attributes.quote}}></p>
                <p style={{ textDecoration: "underline" }}>Read More</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Owners;
