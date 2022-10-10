import NewsHead from "../components/NewsHead";
import Nav from "../components/Nav";
import styles from "../styles/news.module.css";
import Cases from "../components/Cases";
import Articles from "../components/Articles";
import {config} from "../components/Constants"
import { useEffect, useState } from "react";

const URL = config.url

const news = () => {
  const [newstext, setnewstext] = useState(null)
  const [loadnewstext, setloadnewstext] = useState(true)
  useEffect(() => {
    fetch(`${URL}/in-the-new`)
      .then((res) => res.json())
      .then((newstext) => {
        setnewstext(newstext)
        setloadnewstext(false)
      })
  }, [])

  const [showDropdown, setShowDropdown] = useState(1);

  function displayDropdown(id) {
    if (showDropdown == id) {
      setShowDropdown(0);
    } else {
      setShowDropdown(id);
    }
  }

  if(loadnewstext){
    return(
      <div>loading...</div>
    )
  }
  return (
		<>
			<NewsHead />
			<Nav />
			<div className={styles.news}>
				<div className={styles.newspara}>
					<svg version='1.1' id='Isolation_Mode' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 246.7 282.2' enableBackground='new 0 0 246.7 282.2' space='preserve' width='12rem' fill='#002d62'>
						<g>
							<path
								d='M225.3,85.5h-59.1c-2.7,0-4.8-2.2-4.8-4.8V21.6c0-2.1,1.7-3.4,3.4-3.4c0.8,0,1.7,0.3,2.4,1l60.5,60.5c0.7,0.7,1,1.6,1,2.4
		C228.7,83.9,227.4,85.5,225.3,85.5z'
							/>
							<path
								d='M166.2,99.9c-10.6,0-19.2-8.6-19.2-19.2V18.2H26.8c-5.3,0-9.6,4.3-9.6,9.6v226c0,5.3,4.3,9.6,9.6,9.6h192.3
		c5.3,0,9.6-4.3,9.6-9.6V99.9H166.2z M103.7,124h38.5c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6h-38.5c-5.3,0-9.6-4.3-9.6-9.6
		C94.1,128.3,98.4,124,103.7,124z M175.8,220.1H70.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6h105.8c5.3,0,9.6,4.3,9.6,9.6
		C185.5,215.8,181.2,220.1,175.8,220.1z M175.8,181.7H70.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6h105.8
		c5.3,0,9.6,4.3,9.6,9.6C185.5,177.4,181.2,181.7,175.8,181.7z'
							/>
						</g>
					</svg>
					<div className={styles.newsParaTxt}>
						<h3>{newstext.data.attributes.title}</h3>
						<p dangerouslySetInnerHTML={{ __html: newstext.data.attributes.content }}></p>
					</div>
				</div>
			</div>
			<div className={styles.spacer} onClick={() => displayDropdown(1)} style={{ cursor: 'pointer' }}>
				<div className={styles.attorneybar}>
					<svg version='1.1' id='Isolation_Mode' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 246.7 282.2' enableBackground='new 0 0 246.7 282.2' space='preserve' fill='#fff' width={50}>
						<g>
							<path
								d='M225.3,85.5h-59.1c-2.7,0-4.8-2.2-4.8-4.8V21.6c0-2.1,1.7-3.4,3.4-3.4c0.8,0,1.7,0.3,2.4,1l60.5,60.5c0.7,0.7,1,1.6,1,2.4
			C228.7,83.9,227.4,85.5,225.3,85.5z'
							/>
							<path
								d='M166.2,99.9c-10.6,0-19.2-8.6-19.2-19.2V18.2H26.8c-5.3,0-9.6,4.3-9.6,9.6v226c0,5.3,4.3,9.6,9.6,9.6h192.3
			c5.3,0,9.6-4.3,9.6-9.6V99.9H166.2z M103.7,124h38.5c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6h-38.5c-5.3,0-9.6-4.3-9.6-9.6
			C94.1,128.3,98.4,124,103.7,124z M175.8,220.1H70.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6h105.8c5.3,0,9.6,4.3,9.6,9.6
			C185.5,215.8,181.2,220.1,175.8,220.1z M175.8,181.7H70.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6h105.8
			c5.3,0,9.6,4.3,9.6,9.6C185.5,177.4,181.2,181.7,175.8,181.7z'
							/>
						</g>
					</svg>
					<div style={{ marginLeft: '0.8rem' }}>
						<p>News Article</p>
					</div>
					{showDropdown == 1 ? <p className={styles.dropStatus}>CLOSE</p> : <p className={styles.dropStatus}>OPEN</p>}
				</div>
			</div>
			{showDropdown == 1 && (
				<>
					<div className={styles.newsArts}>
						<Articles />
					</div>
				</>
			)}
			<div
				className={styles.spacer}
				onClick={() => displayDropdown(2)}
				style={{
					cursor: 'pointer',
					marginBottom: showDropdown == 2 ? '' : '3rem',
				}}>
				<div className={styles.attorneybar} style={{ marginTop: '2rem' }}>
					<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 164 133' enableBackground='new 0 0 164 133' space='preserve' fill='#fff' width={50}>
						<path
							stroke='#FFFFFF'
							strokeWidth='0.4613'
							strokeMiterlimit='10'
							d='M102.7,70c0,11.6,11.9,21,26.7,21c14.7,0,26.7-9.4,26.7-21
	c-0.8,0-1.5,0-2.3,0l-19.4-37.4c2-1.4,3.3-3.7,3.3-6.3c0-4.2-3.4-7.6-7.6-7.6l-42.2-7.2c-0.7-0.2-1.4-0.4-2.1-0.4
	c-0.7,0-1.4,0.1-2.1,0.4l-42.8,7.2c-4.2,0-7.6,3.4-7.6,7.6c0,3.5,2.4,6.5,5.7,7.3L15.9,70c-0.5,0-1,0-1.5,0c0,11.6,11.9,21,26.7,21
	c14.7,0,26.7-9.4,26.7-21c-0.8,0-1.5,0-2.3,0L46.7,33.9h32.1l-2.7,70.9c0,0-30.5,4.7-30.5,10.6S36.4,126,42.2,126h86.6
	c5.8,0-3.5-4.7-3.5-10.6s-30.1-10.6-30.1-10.6l-2.6-70.9h34.3l-23,36.1C103.7,70,103.2,70,102.7,70z M20.3,70l22.5-35.4L61.1,70
	C47.6,70,34.1,70,20.3,70z M131.1,34.7L149.4,70c-13.6,0-27,0-40.8,0L131.1,34.7z'
						/>
					</svg>
					<div style={{ marginLeft: '0.8rem' }}>
						<p>Case Summaries & Judgements</p>
					</div>
					{showDropdown == 2 ? <p className={styles.dropStatus}>CLOSE</p> : <p className={styles.dropStatus}>OPEN</p>}
				</div>
			</div>
			{showDropdown == 2 && (
				<>
					<div className={styles.caseSec}>
						<Cases />
					</div>
				</>
			)}
		</>
	)
};

export default news;
