import React from 'react'
import Nav from '../components/Nav'
import MedicalHead from '../components/MedicalHead'
import styles from '../styles/Medical.module.css'
import { useState } from 'react'

const medical = () => {
	const [showDropdown, setShowDropdown] = useState(1)

	function displayDropdown(id) {
		if (showDropdown == id) {
			setShowDropdown(0)
		} else {
			setShowDropdown(id)
		}
	}

	return (
		<>
			<MedicalHead />
			<Nav />
			<div className={styles.main}>
				<div className={styles.sec1}>
					<svg version='1.1' id='Icon' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 91.6 87.1' enableBackground='new 0 0 91.6 87.1' space='preserve' fill='#002d62' width='12rem'>
						<g>
							<path
								d='M79.5,25.1h-1.3v-9.4c0-3.7-3-6.7-6.7-6.7h-4.2c-0.6-3.1-3.3-5.4-6.6-5.4H32.3c-1.6,0-3.2,0.7-4.4,1.8L15.4,17.9
			c-1.2,1.2-1.8,2.7-1.8,4.4v10.9h-1.3c-3.7,0-6.7,3-6.7,6.7v35c0,3.7,3,6.7,6.7,6.7h67.2c3.7,0,6.7-3,6.7-6.7v-43
			C86.2,28.1,83.2,25.1,79.5,25.1z M67.4,14.3h3.4c1.1,0,2,0.9,2,2v8.7h-5.4V14.3z M19,33.1V22.4h7.5c3.3,0,5.9-2.6,5.9-5.9V8.9H60
			c1.1,0,2,0.9,2,2v14.1H49.5c-2.2,0-4.3,1.1-5.6,3l-3.4,5.1H19z M60.7,73.5c-9.7,0-17.5-7.8-17.5-17.5S51,38.5,60.7,38.5
			S78.2,46.3,78.2,56S70.4,73.5,60.7,73.5z'
							/>
							<path
								d='M64.7,52v-6.7c0-1.5-1.2-2.7-2.7-2.7h-2.7c-1.5,0-2.7,1.2-2.7,2.7V52h-6.7c-1.5,0-2.7,1.2-2.7,2.7v2.7
			c0,1.5,1.2,2.7,2.7,2.7h6.7v6.7c0,1.5,1.2,2.7,2.7,2.7H62c1.5,0,2.7-1.2,2.7-2.7V60h6.7c1.5,0,2.7-1.2,2.7-2.7v-2.7
			c0-1.5-1.2-2.7-2.7-2.7H64.7z'
							/>
						</g>
					</svg>
					<div className={styles.sec1Txt}>
						<h3>Medical</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</div>
				<div className={styles.dropdowns}>
					<div className={styles.spacer}>
						<div className={styles.attorneybar} onClick={() => displayDropdown(1)}>
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
								<p>Malpractice</p>
							</div>
							{showDropdown == 1 ? <p className={styles.dropStatus}>CLOSE</p> : <p className={styles.dropStatus}>OPEN</p>}
						</div>
					</div>
					{showDropdown == 1 && (
						<div className={styles.dropBody}>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							<div className={styles.bodyImg} style={{ backgroundImage: "url('/civilrights.jpg')" }}></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default medical
