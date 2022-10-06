import YourHead from "../components/YourHead";
import Nav from "../components/Nav";
import styles from "../styles/attorneys.module.css";
import Image from "next/image";
import {config} from "../components/Constants"
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"

const URL = config.url

const attorneys = () => {
  const [attorneytext, setattorneytext] = useState(null)
  const [loadattorneytext, setloadattorneytext] = useState(true)
  useEffect(() => {
    fetch(`${URL}/attorney-page-your-attorney`)
      .then((res) => res.json())
      .then((attorneytext) => {
        setattorneytext(attorneytext)
        setloadattorneytext(false)
      })
  }, [])

  const [attorneys, setattorneys] = useState(null)
  const [loadattorneys, setloadattorneys] = useState(true)
  useEffect(() => {
    fetch(`${URL}/attorneys?populate=*&sort=id`)
      .then((res) => res.json())
      .then((attorneys) => {
        setattorneys(attorneys)
        setloadattorneys(false)
      })
  }, [])

  if(loadattorneys){
    return(
      <div>loading...</div>
    )
  }

  if(loadattorneytext){
    return(
      <div>loading...</div>
    )
  }
  return (
    <>
      <YourHead />
      <Nav />
      <div className={styles.coliseum}>
        <div className={styles.phoneemail}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 175 150"
            enableBackground="new 0 0 175 150"
            space="preserve"
            width="200"
            fill="#002d62"
          >
            <g>
              <polygon points="86.1,4 8.2,46.8 8.2,53.6 164,53.6 164,46.8 	" />
              <rect x="20.3" y="59" width="133.6" height="6.4" />
              <rect x="63.8" y="70.5" width="14.6" height="44.1" />
              <rect x="32.3" y="70.5" width="14.6" height="44.1" />
              <rect x="95.9" y="70.5" width="14.6" height="44.1" />
              <rect x="127.3" y="70.5" width="14.6" height="44.1" />
              <rect x="17.7" y="119.6" width="136.2" height="7.8" />
              <rect x="9.9" y="127.4" width="151.8" height="10.4" />
            </g>
          </svg>

          <div className={styles.peclass}>
            <div className={styles.phone}>
              <svg
                version="1.1"
                id="Isolation_Mode"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 102.7 102.9"
                enableBackground="new 0 0 102.7 102.9"
                space="preserve"
                fill="#002d62"
                width="35"
              >
                <g>
                  <path
                    d="M52.1,6C26.3,6,5.3,27,5.3,52.8c0,25.9,21,46.8,46.8,46.8c25.9,0,46.8-21,46.8-46.8C98.9,27,78,6,52.1,6z M76.5,64.1
		L75,71.7c-0.5,2.4-2.3,4.2-4.7,4.7c-2.3,0.5-4.7,0.7-7,0.7c-19.7,0-35.7-16-35.7-35.7c0-2.3,0.2-4.6,0.7-6.9
		c0.5-2.4,2.4-4.2,4.8-4.7l6.9-1.3c1.4-0.3,2.7,0.6,3,2l3.1,13.7c0.3,1.2-0.4,2.5-1.6,3l-2,0.8c-0.3,0.1-0.4,0.4-0.3,0.7
		c2.3,6.5,7.4,11.7,14,13.9c0.3,0.1,0.6,0,0.7-0.3l1.4-2.9c0.5-1.1,1.7-1.7,2.9-1.4l13.4,3C75.9,61.4,76.8,62.7,76.5,64.1z"
                  />
                </g>
              </svg>
              <div className={styles.phone2}>
                <p>601.898.9887</p>
              </div>
            </div>
            <div className={styles.email}>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 94 64"
                enableBackground="new 0 0 94 64"
                space="preserve"
                fill="#002d62"
                width="35"
              >
                <path
                  d="M84.6,52.9L66,32.8c-0.5-0.6-0.5-1.4,0-2l18.6-19.5c0.9-0.9,2.5-0.3,2.5,1v39.5C87.1,53.2,85.5,53.8,84.6,52.9z M9,11.3
	l18.6,19.5c0.5,0.6,0.5,1.4,0,2L9,52.9c-0.9,1-2.5,0.3-2.5-1V12.3C6.5,11,8.1,10.4,9,11.3z M30.7,36.3c0.6-0.6,1.5-0.6,2.1,0
	l4.6,4.8c2.7,2.2,6,3.4,9.3,3.4c3.4,0,6.8-1.2,9.7-3.6l4.4-4.6c0.6-0.6,1.5-0.6,2.1,0l18.2,19.6c0.9,0.9,0.2,2.4-1.1,2.4H13.6
	c-1.3,0-1.9-1.5-1.1-2.4L30.7,36.3z M81.3,4.6c1.3,0,1.9,1.5,1,2.4L53.2,37.5c-3.7,3.1-9.1,3.1-12.6,0.2L11.3,7
	c-0.9-0.9-0.2-2.4,1-2.4H81.3z"
                />
              </svg>
              <div className={styles.email2}>
                <p>info@adcockandmorrison.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.YApara}>
          <h1>{attorneytext.data.attributes.title}</h1>
          <p style={{ margin: "0" }} dangerouslySetInnerHTML={{__html: attorneytext.data.attributes.content}}>
          </p>
        </div>
      </div>
      <div className={styles.spacer}>
        <div className={styles.attorneybar}>
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
            <p>Attorneys</p>
          </div>
        </div>
      </div>
      {attorneys.data.map((attorney) => {
        return (
          <div>
        <div className={styles.coliseum}>
          <div className={styles.phoneemail}>
            <Image src={attorney.attributes.headshot.data.attributes.url} width={200} height={200} />

            <div className={styles.peclass2}>
              <div className={styles.phone}>
                <svg
                  version="1.1"
                  id="Isolation_Mode"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 102.7 102.9"
                  enableBackground="new 0 0 102.7 102.9"
                  space="preserve"
                  fill="#002d62"
                  width="35"
                >
                  <g>
                    <path
                      d="M52.1,6C26.3,6,5.3,27,5.3,52.8c0,25.9,21,46.8,46.8,46.8c25.9,0,46.8-21,46.8-46.8C98.9,27,78,6,52.1,6z M76.5,64.1
		L75,71.7c-0.5,2.4-2.3,4.2-4.7,4.7c-2.3,0.5-4.7,0.7-7,0.7c-19.7,0-35.7-16-35.7-35.7c0-2.3,0.2-4.6,0.7-6.9
		c0.5-2.4,2.4-4.2,4.8-4.7l6.9-1.3c1.4-0.3,2.7,0.6,3,2l3.1,13.7c0.3,1.2-0.4,2.5-1.6,3l-2,0.8c-0.3,0.1-0.4,0.4-0.3,0.7
		c2.3,6.5,7.4,11.7,14,13.9c0.3,0.1,0.6,0,0.7-0.3l1.4-2.9c0.5-1.1,1.7-1.7,2.9-1.4l13.4,3C75.9,61.4,76.8,62.7,76.5,64.1z"
                    />
                  </g>
                </svg>
                <div className={styles.phone}>
                  <a href={`tel:${attorney.attributes.phone}`}><p>{attorney.attributes.phone}</p></a>
                </div>
              </div>
              <div className={styles.email}>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 94 64"
                  enableBackground="new 0 0 94 64"
                  space="preserve"
                  fill="#002d62"
                  width="35"
                >
                  <path
                    d="M84.6,52.9L66,32.8c-0.5-0.6-0.5-1.4,0-2l18.6-19.5c0.9-0.9,2.5-0.3,2.5,1v39.5C87.1,53.2,85.5,53.8,84.6,52.9z M9,11.3
	l18.6,19.5c0.5,0.6,0.5,1.4,0,2L9,52.9c-0.9,1-2.5,0.3-2.5-1V12.3C6.5,11,8.1,10.4,9,11.3z M30.7,36.3c0.6-0.6,1.5-0.6,2.1,0
	l4.6,4.8c2.7,2.2,6,3.4,9.3,3.4c3.4,0,6.8-1.2,9.7-3.6l4.4-4.6c0.6-0.6,1.5-0.6,2.1,0l18.2,19.6c0.9,0.9,0.2,2.4-1.1,2.4H13.6
	c-1.3,0-1.9-1.5-1.1-2.4L30.7,36.3z M81.3,4.6c1.3,0,1.9,1.5,1,2.4L53.2,37.5c-3.7,3.1-9.1,3.1-12.6,0.2L11.3,7
	c-0.9-0.9-0.2-2.4,1-2.4H81.3z"
                  />
                </svg>
                <div className={styles.email}>
                <a href={`mailto:${attorney.attributes.email}`}><p>Contact {attorney.attributes.firstName}</p></a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.YApara}>
            <h1 style={{ margin: "0" }}>{attorney.attributes.firstName} {attorney.attributes.middleInitial} {attorney.attributes.lastName} {attorney.attributes.title}</h1>
            <p style={{ margin: "0", marginBottom: "2rem" }} dangerouslySetInnerHTML={{__html: attorney.attributes.quote}}>
            </p>
            <h4 style={{ margin: "0" }}>Practice Areas:</h4>
            <p style={{ margin: "0" }} dangerouslySetInnerHTML={{__html: attorney.attributes.practiceAreas}}>
            </p>
          </div>
        </div>
      </div>
        )
      })}

      <div className={styles.spacer}>
        <div className={styles.attorneybar}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 775.7 568.2"
            enableBackground="new 0 0 775.7 568.2"
            space="preserve"
            fill="#fff"
            width={50}
          >
            <g>
              <path
                d="M737.6,343.5c6.6,0,12-5.4,12-12v-6.1c0-6.7-5.4-12-12-12h-4.2H50.2H46c-6.7,0-12,5.4-12,12v6.1c0,6.7,5.4,12,12,12h4.2
		v150.7H46c-6.6,0-12,5.4-12,12v6.1c0,6.7,5.4,12,12,12h4.2h683.2h4.2c6.7,0,12-5.4,12-12v-6.1c0-6.7-5.4-12-12-12h-4.2V343.5H737.6
		z"
              />
              <path
                d="M179.3,209.5c20.8,0,37.6-16.8,37.6-37.7c0-10.5-4.3-20-11.3-26.9c-6.8-6.7-16.1-10.8-26.3-10.8
		c-17.7,0-32.5,12.2-36.5,28.7c-0.7,2.9-1.1,5.9-1.1,8.9C141.6,192.6,158.5,209.5,179.3,209.5z"
              />
              <path
                d="M105.2,292.3h148.1c4.4,0,8-3.6,8-8v-27.6c0-21.9-17.8-39.7-39.7-39.7H137c-21.9,0-39.7,17.8-39.7,39.7v27.6
		C97.3,288.7,100.8,292.3,105.2,292.3z"
              />
              <path
                d="M354.2,171.8c0,20.8,16.8,37.7,37.6,37.7c20.8,0,37.6-16.8,37.6-37.7c0-10.5-4.3-20-11.3-26.9
		c-6.8-6.7-16.1-10.8-26.3-10.8c-17.7,0-32.5,12.2-36.5,28.7C354.6,165.8,354.2,168.8,354.2,171.8z"
              />
              <path
                d="M434.1,217h-84.6c-21.9,0-39.7,17.8-39.7,39.7v27.6c0,4.4,3.6,8,8,8h148.1c4.4,0,8-3.6,8-8v-27.6
		C473.8,234.7,456,217,434.1,217z"
              />
              <path
                d="M566.7,171.8c0,20.8,16.8,37.7,37.6,37.7c20.8,0,37.6-16.8,37.6-37.7c0-10.5-4.3-20-11.3-26.9
		c-6.8-6.7-16.1-10.8-26.3-10.8c-17.7,0-32.5,12.2-36.5,28.7C567.1,165.8,566.7,168.8,566.7,171.8z"
              />
              <path
                d="M522.4,256.7v27.6c0,4.4,3.6,8,8,8h148.1c4.4,0,8-3.6,8-8v-27.6c0-21.9-17.8-39.7-39.7-39.7h-84.6
		C540.1,217,522.4,234.7,522.4,256.7z"
              />
              <path
                d="M285.6,108.9c20.8,0,37.6-16.8,37.6-37.7c0-10.5-4.3-20-11.3-26.9c-6.8-6.7-16.1-10.8-26.3-10.8
		c-17.7,0-32.5,12.2-36.5,28.7c-0.7,2.9-1.1,5.9-1.1,8.9C247.9,92,264.8,108.9,285.6,108.9z"
              />
              <path
                d="M227.9,171.8c0,12.8-5.1,25.1-14,34.1h7.7c22.7,0,42,15,48.4,35.7h31.1c6.4-20.7,25.7-35.7,48.4-35.7h7.7
		c-8.9-9-14-21.3-14-34.1c0-3.8,0.5-7.7,1.4-11.5c2.6-10.6,8.5-19.6,16.4-26.1c-7.1-10.8-19.3-17.9-33.2-17.9h-84.6
		c-13.9,0-26.1,7.1-33.2,17.9c1.1,0.9,2.2,1.9,3.2,2.9C222.7,146.3,227.9,158.7,227.9,171.8z"
              />
              <path
                d="M498.1,108.9c20.8,0,37.6-16.8,37.6-37.7c0-10.5-4.3-20-11.3-26.9c-6.8-6.7-16.1-10.8-26.3-10.8
		c-17.7,0-32.5,12.2-36.5,28.7c-0.7,2.9-1.1,5.9-1.1,8.9C460.5,92,477.3,108.9,498.1,108.9z"
              />
              <path
                d="M440.5,171.8c0,12.8-5.1,25.1-14,34.1h7.7c22.7,0,42,15,48.4,35.7h31.1c6.4-20.7,25.7-35.7,48.4-35.7h7.7
		c-8.9-9-14-21.3-14-34.1c0-3.8,0.5-7.7,1.4-11.5c2.6-10.6,8.5-19.6,16.4-26.1c-7.1-10.8-19.3-17.9-33.2-17.9h-84.6
		c-13.9,0-26.1,7.1-33.2,17.9c1.1,0.9,2.2,1.9,3.2,2.9C435.3,146.3,440.5,158.7,440.5,171.8z"
              />
            </g>
          </svg>
          <div style={{ marginLeft: "0.8rem" }}>
            <p>Court Admissions</p>
          </div>
        </div>
      </div>
      <div className={styles.seals}>
        <Image
          src="/court_seals.png"
          alt="Seals Icons"
          width="1228"
          height="248"
        />
      </div>
    </>
  );
};

export default attorneys;
