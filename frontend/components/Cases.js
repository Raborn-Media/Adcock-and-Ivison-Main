import React from "react";
import styles from "../styles/casesjs.module.css";
import Image from "next/image";
import { config } from "./Constants";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const URL = config.url;

const Cases = () => {
  const [cases, setcases] = useState(null);
  const [loadcases, setloadcases] = useState(true);
  useEffect(() => {
    fetch(`${URL}/cases?populate=*&sort=id`)
      .then((res) => res.json())
      .then((cases) => {
        setcases(cases);
        setloadcases(false);
      });
  }, []);

  const [caseNum, setCaseNum] = useState(0);

  function showCase(num) {
    setCaseNum(num);
  }

  const newCases = [];
  const oldCases = [];

  function nextNewCase() {
    if (caseNum == newCases[newCases.length - 1].id) {
      setCaseNum(newCases[0].id);
    } else {
      setCaseNum(caseNum + 1);
    }
  }

  function prevNewCase() {
    if (caseNum == newCases[0].id) {
      setCaseNum(newCases[newCases.length - 1].id);
    } else {
      setCaseNum(caseNum - 1);
    }
  }

  function nextOldCase() {
    if (caseNum == oldCases[oldCases.length - 1].id) {
      setCaseNum(oldCases[0].id);
    } else {
      setCaseNum(caseNum + 1);
    }
  }

  function prevOldCase() {
    if (caseNum == oldCases[0].id) {
      setCaseNum(oldCases[oldCases.length - 1].id);
    } else {
      setCaseNum(caseNum - 1);
    }
  }

  if (loadcases) {
    return <div>loading...</div>;
  }

  console.log(oldCases);

  return (
    <>
      {caseNum == 0 && (
        <>
          <div className={styles.cases}>
            <h2>New Cases</h2>
            {cases.data.map((caseSum) => {
              return (
                <>
                  {caseSum.attributes.archived == false && (
                    <div
                      className={styles.case}
                      onClick={() => showCase(caseSum.id)}
                    >
                      <div>
                        <svg
                          version="1.1"
                          id="Isolation_Mode"
                          xmlns="http://www.w3.org/2000/svg"
                          xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 246.7 282.2"
                          enableBackground="new 0 0 246.7 282.2"
                          space="preserve"
                          width="2rem"
                          fill="#002d62"
                        >
                          <g>
                            <path
                              d="M225.3,85.5h-59.1c-2.7,0-4.8-2.2-4.8-4.8V21.6c0-2.1,1.7-3.4,3.4-3.4c0.8,0,1.7,0.3,2.4,1l60.5,60.5c0.7,0.7,1,1.6,1,2.4
			              C228.7,83.9,227.4,85.5,225.3,85.5z"
                            />
                            <path
                              d="M166.2,99.9c-10.6,0-19.2-8.6-19.2-19.2V18.2H26.8c-5.3,0-9.6,4.3-9.6,9.6v226c0,5.3,4.3,9.6,9.6,9.6h192.3
                    c5.3,0,9.6-4.3,9.6-9.6V99.9H166.2z M103.7,124h38.5c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6h-38.5c-5.3,0-9.6-4.3-9.6-9.6
                    C94.1,128.3,98.4,124,103.7,124z M175.8,220.1H70.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6h105.8c5.3,0,9.6,4.3,9.6,9.6
                    C185.5,215.8,181.2,220.1,175.8,220.1z M175.8,181.7H70.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6h105.8
                    c5.3,0,9.6,4.3,9.6,9.6C185.5,177.4,181.2,181.7,175.8,181.7z"
                            />
                          </g>
                        </svg>
                      </div>
                      <div>
                        <p>{caseSum.attributes.title}</p>
                        <p>read more</p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>

          <div className={styles.cases} style={{ display: oldCases.length == 0?'none':''}}>
            <h2>Archived Cases</h2>
            {cases.data.map((caseSum) => {
              return (
                <>
                  {caseSum.attributes.archived == true && (
                    <div
                      className={styles.case}
                      onClick={() => showCase(caseSum.id)}
                    >
                      <div>
                        <svg
                          version="1.1"
                          id="Isolation_Mode"
                          xmlns="http://www.w3.org/2000/svg"
                          xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 246.7 282.2"
                          enableBackground="new 0 0 246.7 282.2"
                          space="preserve"
                          width="2rem"
                          fill="#002d62"
                        >
                          <g>
                            <path
                              d="M225.3,85.5h-59.1c-2.7,0-4.8-2.2-4.8-4.8V21.6c0-2.1,1.7-3.4,3.4-3.4c0.8,0,1.7,0.3,2.4,1l60.5,60.5c0.7,0.7,1,1.6,1,2.4
			              C228.7,83.9,227.4,85.5,225.3,85.5z"
                            />
                            <path
                              d="M166.2,99.9c-10.6,0-19.2-8.6-19.2-19.2V18.2H26.8c-5.3,0-9.6,4.3-9.6,9.6v226c0,5.3,4.3,9.6,9.6,9.6h192.3
                    c5.3,0,9.6-4.3,9.6-9.6V99.9H166.2z M103.7,124h38.5c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6h-38.5c-5.3,0-9.6-4.3-9.6-9.6
                    C94.1,128.3,98.4,124,103.7,124z M175.8,220.1H70.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6h105.8c5.3,0,9.6,4.3,9.6,9.6
                    C185.5,215.8,181.2,220.1,175.8,220.1z M175.8,181.7H70.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6h105.8
                    c5.3,0,9.6,4.3,9.6,9.6C185.5,177.4,181.2,181.7,175.8,181.7z"
                            />
                          </g>
                        </svg>
                      </div>
                      <div>
                        <p>{caseSum.attributes.title}</p>
                        <p>read more</p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </>
      )}

      {cases.data.map((caseSum) => {
        if (caseSum.attributes.archived == false) {
          newCases.push(caseSum);
        } else if (caseSum.attributes.archived == true) {
          oldCases.push(caseSum);
        }
        return (
          <>
            {caseSum.attributes.archived == false && caseNum == caseSum.id && (
              <div className={styles.caseInfoMain}>
                <div className={styles.controls}>
                  <img src="/circle_arrow.svg" onClick={prevNewCase} />
                  <h1>{caseSum.attributes.title}</h1>
                  <img src="/circle_arrow.svg" onClick={nextNewCase} />
                  <h4 className={styles.close} onClick={() => setCaseNum(0)}>
                    CLOSE ARTICLE
                  </h4>
                </div>
                <div className={styles.caseInfo}>
                  <div className={styles.caseImg}>
                    {caseSum.attributes.image.data != null && (
                      <img src={caseSum.attributes.image.data.attributes.url} />
                    )}
                  </div>
                  <div className={styles.caseTxt}>
                    <h2>{caseSum.attributes.title}</h2>
                    <ReactMarkdown>{caseSum.attributes.summary}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}

            {caseSum.attributes.archived == true && caseNum == caseSum.id && (
              <div className={styles.caseInfoMain}>
                <div className={styles.controls}>
                  <img src="/circle_arrow.svg" onClick={prevOldCase} />
                  <h1>{caseSum.attributes.title}</h1>
                  <img src="/circle_arrow.svg" onClick={nextOldCase} />
                  <h4 className={styles.close} onClick={() => setCaseNum(0)}>
                    CLOSE ARTICLE
                  </h4>
                </div>
                <div className={styles.caseInfo}>
                  <div className={styles.caseImg}>
                    {caseSum.attributes.image.data != null && (
                      <img src={caseSum.attributes.image.data.attributes.url} />
                    )}
                  </div>
                  <div className={styles.caseTxt}>
                    <h2>{caseSum.attributes.title}</h2>
                    <ReactMarkdown>{caseSum.attributes.summary}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default Cases;
