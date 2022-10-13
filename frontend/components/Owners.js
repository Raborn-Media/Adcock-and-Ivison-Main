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
					<div key={attorney.id} className={styles.bp}>
						<div className={styles.person}>
							<img src={attorney.attributes.headshot.data.attributes.url} className={styles.headshot} />
							<div style={{ color: 'color: #002d62;' }}>
								<h1 style={{marginTop: '2rem'}}>
									{attorney.attributes.firstName} {attorney.attributes.middleInitial} {attorney.attributes.lastName}
								</h1>
								<p dangerouslySetInnerHTML={{ __html: attorney.attributes.quote }} style={{fontSize: '1.2rem'}}></p>
								<p style={{ textDecoration: 'underline' }}>Read More</p>
							</div>
						</div>
					</div>
				)
      })}
    </div>
  );
};

export default Owners;
