import React from "react";
import styles from "../styles/articlesjs.module.css";
import Image from "next/image";
import { config } from "./Constants";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const URL = config.url;

const Articles = () => {
  const [articles, setarticles] = useState(null);
  const [loadarticles, setloadarticles] = useState(true);
  useEffect(() => {
    fetch(`${URL}/articles?populate=*&sort=id`)
      .then((res) => res.json())
      .then((articles) => {
        setarticles(articles);
        setloadarticles(false);
      });
  }, []);

  const [articleNum, setarticleNum] = useState(0);

  function showarticle(num) {
    setarticleNum(num);
  }

  const newarticles = [];
  const oldarticles = [];

  function nextNewarticle() {
    if (articleNum == newarticles[newarticles.length - 1].id) {
      setarticleNum(newarticles[0].id);
    } else {
      setarticleNum(articleNum + 1);
    }
  }

  function prevNewarticle() {
    if (articleNum == newarticles[0].id) {
      setarticleNum(newarticles[newarticles.length - 1].id);
    } else {
      setarticleNum(articleNum - 1);
    }
  }

  function nextOldarticle() {
    if (articleNum == oldarticles[oldarticles.length - 1].id) {
      setarticleNum(oldarticles[0].id);
    } else {
      setarticleNum(articleNum + 1);
    }
  }

  function prevOldarticle() {
    if (articleNum == oldarticles[0].id) {
      setarticleNum(oldarticles[oldarticles.length - 1].id);
    } else {
      setarticleNum(articleNum - 1);
    }
  }

  if (loadarticles) {
    return <div>loading...</div>;
  }

  return (
    <>
      {articleNum == 0 && (
        <>
          <div className={styles.articles}>
            <h2>New articles</h2>
            {articles.data.map((articlesum) => {
              return (
                <>
                  {articlesum.attributes.archived == false && (
                    <div
                      className={styles.article}
                      onClick={() => showarticle(articlesum.id)}
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
                        <p>{articlesum.attributes.title}</p>
                        <p>read more</p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>

          <div
            className={styles.articles}
            style={{ display: oldarticles.length != 0?"none":"" }}
          >
            <h2>Archived articles</h2>
            {articles.data.map((articlesum) => {
              return (
                <>
                  {articlesum.attributes.archived == true && (
                    <div
                      className={styles.article}
                      onClick={() => showarticle(articlesum.id)}
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
                        <p>{articlesum.attributes.title}</p>
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

      {articles.data.map((articlesum) => {
        if (articlesum.attributes.archived == false) {
          newarticles.push(articlesum);
        } else if (articlesum.attributes.archived == true) {
          oldarticles.push(articlesum);
        }
        return (
          <>
            {articlesum.attributes.archived == false &&
              articleNum == articlesum.id && (
                <div className={styles.articleInfoMain}>
                  <div className={styles.controls}>
                    <img src="/circle_arrow.svg" onClick={prevNewarticle} />
                    <h1>{articlesum.attributes.title}</h1>
                    <img src="/circle_arrow.svg" onClick={nextNewarticle} />
                    <h4
                      className={styles.close}
                      onClick={() => setarticleNum(0)}
                    >
                      CLOSE ARTICLE
                    </h4>
                  </div>
                  <div className={styles.articleInfo}>
                    <div className={styles.articleImg}>
                      {articlesum.attributes.image.data != null && (
                        <img
                          src={articlesum.attributes.image.data.attributes.url}
                        />
                      )}
                    </div>
                    <div className={styles.articleTxt}>
                      <h2>{articlesum.attributes.title}</h2>
                      <ReactMarkdown>
                        {articlesum.attributes.summary}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              )}

            {articlesum.attributes.archived == true &&
              articleNum == articlesum.id && (
                <div className={styles.articleInfoMain}>
                  <div className={styles.controls}>
                    <img src="/circle_arrow.svg" onClick={prevOldarticle} />
                    <h1>{articlesum.attributes.title}</h1>
                    <img src="/circle_arrow.svg" onClick={nextOldarticle} />
                    <h4
                      className={styles.close}
                      onClick={() => setarticleNum(0)}
                    >
                      CLOSE ARTICLE
                    </h4>
                  </div>
                  <div className={styles.articleInfo}>
                    <div className={styles.articleImg}>
                      {articlesum.attributes.image.data != null && (
                        <img
                          src={articlesum.attributes.image.data.attributes.url}
                        />
                      )}
                    </div>
                    <div className={styles.articleTxt}>
                      <h2>{articlesum.attributes.title}</h2>
                      <ReactMarkdown>
                        {articlesum.attributes.summary}
                      </ReactMarkdown>
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

export default Articles;
