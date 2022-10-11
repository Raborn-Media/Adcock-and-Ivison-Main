import React from 'react'
import TalkHead from '../components/TalkHead'
import Nav from '../components/Nav'
import styles from '../styles/talk.module.css'
import { config } from '../components/Constants'
import { useEffect, useState, useCallback } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import axios from 'axios'

const URL = config.url

const FormOne = () => {

	const [fName, setFName] = useState('first name')
	const [lName, setLName] = useState('last name')
	const [email, setEmail] = useState('email')
	const [phone, setPhone] = useState('phone')
	const [interest, setInterest] = useState('interest')
	const [message, setMessage] = useState('message')

	const [submitted, setSubmitted] = useState(false)

	const [bot, setBot] = useState(true)

	const [notification, setNotification] = useState('')

	const { executeRecaptcha } = useGoogleReCaptcha()

	const handleSubmitForm = useCallback(
		(e) => {
			e.preventDefault()
			if (!executeRecaptcha) {
				console.log('Execute recaptcha not yet available')
				return
			}
			executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) => {
				console.log(gReCaptchaToken, 'response Google reCaptcha server')
				verifyToken(gReCaptchaToken)
			})
		},
		[executeRecaptcha]
	)

	const verifyToken = (gReCaptchaToken) => {
		fetch('/api/verify', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ gRecaptchaToken: gReCaptchaToken }),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res, 'response from backend')
				if (res?.status === 'success') {
					setNotification(res?.message)
					submitFormOne(gReCaptchaToken)
				} else {
					setNotification(res?.message)
				}
			})
	}

	const submitFormOne = async (token) => {

		const form = {
			"Submission Info": "<br /><br />",
			"First Name": `${fName}<br \/>`,
			"Last Name": `${lName}<br \/>`,
			"Email": `${email}<br \/>`,
			"Phone": `${phone}<br \/>`,
			"Interested In": `${interest}<br \/>`,
			"Message": `${message}<br \/>`,
		}

		try {
			await axios
				.post(`${URL}/ezforms/submit`, { token, formName: 'Contact Form', formData: form })
				.then((res) => res.json())
				.then((data) => console.log(data))
				.catch((error) => {
					console.log(error)
				})
				.finally(() => {
					setSubmitted(true)
				})
		}
		catch (error) {
			console.log(error)
		}
	}

	if (submitted) {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<h3>Thank you! We'll be in touch shortly.</h3>
			</div>
		)
	}

	return (
		<form onSubmit={handleSubmitForm}>
			<div className={styles.formLeft}>
				<input type='text' name='fName' placeholder='First Name' onChange={(e) => setFName(e.target.value)} required />
				<input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
				<textarea placeholder='Message/Explanation (optional)' onChange={(e) => setMessage(e.target.value)}></textarea>
			</div>
			<div className={styles.formRight}>
				<input type='text' name='lName' placeholder='Last Name' onChange={(e) => setLName(e.target.value)} required />
				<input type='tel' name='phone' placeholder='Phone' onChange={(e) => setPhone(e.target.value)} required />
				<select onChange={(e) => setInterest(e.target.value)}>
					<option selected disabled hidden>
						Interested In
					</option>
					<option value={'Employment Claims'}>Employement Claims</option>
					<option value={'Personal Injury'}>Personal Injury</option>
					<option value={'Medical'}>Medical</option>
					<option value={'Business'}>Business</option>
					<option value={'Insurance Litigation'}>Insurance Litigation</option>
					<option value={'Other'}>Other</option>
				</select>
				{notification && <p>{notification}</p>}
				<button className={styles.btn1} type='submit'>
					Submit
				</button>
			</div>
		</form>
	)
}

const FormTwo = () => {
	const [fName, setFName] = useState('')
	const [lName, setLName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [resume, setResume] = useState('')
	const [message, setMessage] = useState('')

	const [submitted, setSubmitted] = useState(false)

	const [bot, setBot] = useState(true)

	const submitFormTwo = async () => {

		let form = {
			"Submission Info": "<br /><br />",
			"First Name": `${fName}<br \/>`,
			"Last Name": `${lName}<br \/>`,
			"Email": `${email}<br \/>`,
			"Phone": `${phone}<br \/>`,
			"Message": `${message}<br \/>`,
			"Resume": `${resume}`
		}

		fetch(`${URL}/ezforms/submit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ formData: form, formName: 'Careers Form' }),
			formData: form,
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
		setSubmitted(true)
	}

	if (submitted) {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<h3>Thank you! We'll be in touch shortly.</h3>
			</div>
		)
	}

	return (
		<form onSubmit={submitFormTwo} method='POST'>
			<div className={styles.formLeft}>
				<input type='text' name='fName' placeholder='First Name' onChange={(e) => setFName(e.target.value)} required />
				<input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
				<textarea placeholder='Message/Explanation (optional)' onChange={(e) => setMessage(e.target.value)}></textarea>
			</div>
			<div className={styles.formRight}>
				<input type='text' name='lName' placeholder='Last Name' onChange={(e) => setLName(e.target.value)} required />
				<input type='tel' name='phone' placeholder='Phone' onChange={(e) => setPhone(e.target.value)} required />
				<input className={styles.fileUplaod} type={'file'} name='resume' onChange={(e) => setResume(e.target.files[0])} required />
				<button className={styles.btn2} type='submit'>
					Submit
				</button>
			</div>
		</form>
	)
}

const talk = () => {
	const [talktext, settalktext] = useState(null)
	const [loadtalktext, setloadtalktext] = useState(true)
	useEffect(() => {
		fetch(`${URL}/talk-to-us`)
			.then((res) => res.json())
			.then((talktext) => {
				settalktext(talktext)
				setloadtalktext(false)
			})
	}, [])
	if (loadtalktext) {
		return <div>loading...</div>
	}
	return (
		<>
			<TalkHead />
			<Nav />
			<div className={styles.main}>
				<div>
					<div className={styles.msgsvg}>
						<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 66.4 55.8' enableBackground='new 0 0 66.4 55.8' space='preserve' width='12rem' fill='#002d62'>
							<path
								fill='none'
								d='M42,4.6H13.1c-4,0-7.3,3.3-7.3,7.3v14.8c0,4,3.2,7.2,7.2,7.2h0.1h2v2v7.2l6.8-8.5l0.6-0.7h1h6v-7.3
		c0-3.6,2.9-6.5,6.5-6.5h13.4V12C49.3,7.9,46.1,4.6,42,4.6z'
							/>
							<g>
								<path
									d='M56.3,20.3h-5v6.4c0,5.1-4.2,9.3-9.3,9.3H29.5v1.1c0,3.6,2.9,6.5,6.5,6.5h13l7.3,9v-9h0.1c3.6,0,6.5-2.9,6.5-6.5V26.7
			C62.8,23.1,59.9,20.3,56.3,20.3z'
								/>
								<path
									d='M42,3.6H13.1c-4.6,0-8.3,3.7-8.3,8.3v14.8c0,4.5,3.7,8.2,8.3,8.2h1v11.1L23,35h19c4.6,0,8.3-3.7,8.3-8.3V12
			C50.3,7.4,46.6,3.6,42,3.6z M16.2,22.9c-1-0.2-1.9-1.1-2.1-2.1c-0.4-1.9,1.3-3.5,3.2-3.2c1,0.2,1.9,1.1,2.1,2.1
			C19.7,21.6,18.1,23.2,16.2,22.9z M27.1,22.9c-1-0.2-1.9-1.1-2.1-2.1c-0.4-1.9,1.3-3.5,3.2-3.2c1,0.2,1.9,1.1,2.1,2.1
			C30.6,21.6,28.9,23.2,27.1,22.9z M37.9,22.9c-1-0.2-1.9-1.1-2.1-2.1c-0.4-1.9,1.3-3.5,3.2-3.2c1,0.2,1.9,1.1,2.1,2.1
			C41.4,21.6,39.8,23.2,37.9,22.9z'
								/>
							</g>
						</svg>
						<div className={styles.msginfo}>
							<h3>{talktext.data.attributes.title}</h3>
							<p style={{ margin: '0' }} dangerouslySetInnerHTML={{ __html: talktext.data.attributes.content }}></p>
						</div>
					</div>
					<div className={styles.contactinfo}>
						<div className={styles.location}>
							<div>
								<svg version='1.1' id='_x2014_ÎÓÈ_x5F_1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 234 334' enableBackground='new 0 0 234 334' space='preserve' fill='#002d62' width={20}>
									<path
										d='M115.1,7.3C54.9,7.3,6.2,56.1,6.2,116.2c0,4.8,0.9,10.7,2.2,16.7c3.7,17.4,10.4,34.1,19.6,49.3
	c24.9,41.5,87.2,144.2,87.2,144.2s61.2-101.1,85.1-140.6c9.1-15.1,16.1-31.3,20.4-48.4c1.9-7.5,3.3-15.1,3.3-21.3
	C224,56.1,175.2,7.3,115.1,7.3z M114.5,166.9c-28,0-50.7-22.7-50.7-50.7c0-28,22.7-50.7,50.7-50.7c28,0,50.7,22.7,50.7,50.7
	C165.2,144.2,142.5,166.9,114.5,166.9z'
									/>
								</svg>
							</div>
							<div className={styles.lpara}>
								<p style={{ margin: '0' }}>795 Woodlands Parkway, Suite 220</p>
								<p style={{ margin: '0' }}>Post Office Box 3308</p>
								<p style={{ margin: '0' }}>Ridgeland, Mississippi 39157</p>
							</div>
							<div className={styles.phone}>
								<div className={styles.phonesvg}>
									<svg version='1.1' id='Isolation_Mode' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 102.7 102.9' enableBackground='new 0 0 102.7 102.9' space='preserve' fill='#002d62' width={30}>
										<g>
											<path
												d='M52.1,6C26.3,6,5.3,27,5.3,52.8c0,25.9,21,46.8,46.8,46.8c25.9,0,46.8-21,46.8-46.8C98.9,27,78,6,52.1,6z M76.5,64.1
		L75,71.7c-0.5,2.4-2.3,4.2-4.7,4.7c-2.3,0.5-4.7,0.7-7,0.7c-19.7,0-35.7-16-35.7-35.7c0-2.3,0.2-4.6,0.7-6.9
		c0.5-2.4,2.4-4.2,4.8-4.7l6.9-1.3c1.4-0.3,2.7,0.6,3,2l3.1,13.7c0.3,1.2-0.4,2.5-1.6,3l-2,0.8c-0.3,0.1-0.4,0.4-0.3,0.7
		c2.3,6.5,7.4,11.7,14,13.9c0.3,0.1,0.6,0,0.7-0.3l1.4-2.9c0.5-1.1,1.7-1.7,2.9-1.4l13.4,3C75.9,61.4,76.8,62.7,76.5,64.1z'
											/>
										</g>
									</svg>
								</div>
								<div className={styles.phoneinfo}>
									<p style={{ margin: '0' }}>PHONE:</p>
									<p style={{ margin: '0' }}>601.898.9887</p>
								</div>
							</div>
							<div>
								<div className={styles.fax}>
									<div className={styles.faxsvg}>
										<svg version='1.1' id='Isolation_Mode' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 85 77' enableBackground='new 0 0 85 77' space='preserve' fill='#002d62' width={30}>
											<g>
												<path
													d='M34.6,23.3h-5.5c-1.4,0-2.6,1.1-2.6,2.6v14.9c0,1.4,1.1,2.6,2.6,2.6h5.5c1.4,0,2.6-1.1,2.6-2.6V25.9
		C37.2,24.4,36,23.3,34.6,23.3z'
												/>
												<path
													d='M39.2,6C20.8,6,5.8,20.9,5.8,39.4c0,18.4,14.9,33.4,33.4,33.4s33.4-14.9,33.4-33.4C72.6,20.9,57.6,6,39.2,6z M47,59.4
		c0,0.1-0.1,0.2-0.2,0.2H31.6c-0.1,0-0.2-0.1-0.2-0.2v-2.8c0-0.1,0.1-0.2,0.2-0.2h15.2c0.1,0,0.2,0.1,0.2,0.2V59.4z M47,53.7
		c0,0.1-0.1,0.2-0.2,0.2H31.6c-0.1,0-0.2-0.1-0.2-0.2v-2.8c0-0.1,0.1-0.2,0.2-0.2h15.2c0.1,0,0.2,0.1,0.2,0.2V53.7z M55.9,49
		c0,1.6-1.3,2.9-2.9,2.9h-2.9v-4.2c0-0.2-0.2-0.4-0.4-0.4H28.7c-0.2,0-0.4,0.2-0.4,0.4v4.2h-2.9c-1.6,0-2.9-1.3-2.9-2.9V22.1
		c0-1.6,1.3-2.9,2.9-2.9H53c1.6,0,2.9,1.3,2.9,2.9V49z'
												/>
											</g>
										</svg>
									</div>
									<div className={styles.faxinfo}>
										<p style={{ margin: '0' }}>FAX:</p>
										<p style={{ margin: '0' }}>601.898.9860</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.spacer}>
					<div className={styles.attorneybar}>
						<svg version='1.1' id='Isolation_Mode' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 82 82' enableBackground='new 0 0 82 82' space='preserve' fill='#fff' width={50}>
							<g>
								<circle cx='38.1' cy='19.7' r='15.8' />
								<path
									d='M38.1,40.9c-17.3,0-31.4,8.6-31.4,19.2c0,0.1,0,0.2,0,0.3c7.6,8.8,18.8,14.4,31.3,14.4c12.5,0,23.7-5.6,31.3-14.4
		              c0-0.1,0-0.2,0-0.3C69.5,49.5,55.5,40.9,38.1,40.9z'
								/>
							</g>
						</svg>
						<div style={{ marginLeft: '0.8rem' }}>
							<p>Contact Us</p>
						</div>
					</div>
				</div>

				<div className={styles.formArea}>
					<FormOne />
				</div>

				<div className={styles.spacer}>
					<div className={styles.attorneybar}>
						<svg version='1.1' id='Isolation_Mode' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 128 128' enableBackground='new 0 0 128 128' space='preserve' fill='#fff' width={50}>
							<g>
								<path d='M80.1,28.7l-4.6,21.5h-4.8c0.1,0.5,0.2,1.1,0.2,1.6c0,2.1-0.9,4-2.3,5.3h35.3l6.1-28.4H80.1z' />
								<path
									d='M23.6,75c1.3,7.8,7.9,13.4,15.8,13.4h12.8c3.5,0,6.3,2.8,6.3,6.3c0,0.2,0.1,0.2,0.1,0.3l1.2,18.9c0.5,3.9,3.8,6.9,7.7,7
                    V75.6c-1.6-1.4-3.7-2.2-6-2.2H44.8c-0.5,0-0.9-0.4-1-0.8l-3.5-18.6c-0.1-0.4,0.1-0.8,0.4-1c0.3-0.2,0.7-0.3,1.1-0.1l8.3,4.2h3.7
                    c0,0,9.9,0,9.9,0c2.9,0,5.3-2.4,5.3-5.3c0-2.9-2.4-5.3-5.3-5.3H52.8c-0.2,0-0.3,0-0.5-0.1l-19.2-9.7c-0.2-0.1-0.3-0.2-0.5-0.2
                    c-1-0.5-1.9-0.7-2.7-0.9c-3.3-0.5-6.6,0.6-8.9,2.9c-1.3,1.3-2.1,2.9-2.6,4.6L23.6,75z'
								/>
								<path d='M19.7,19.2c0,7.6,6.1,13.7,13.7,13.7c7.6,0,13.7-6.1,13.7-13.7S41,5.5,33.4,5.5C25.8,5.5,19.7,11.6,19.7,19.2z' />
								<path
									d='M108.4,120.8V59.2H53.8c-0.8,0-1.5,0.4-2.1,1c-0.5,0.6-0.7,1.4-0.6,2.2c0.2,1.3,1.5,2.3,2.9,2.3h14.4c0.6,0,1,0.5,1,1v55.1
		              h9.3v-0.7c0-3.8,3.1-6.8,6.8-6.8h8c3.8,0,6.8,3.1,6.8,6.8v0.7H108.4z'
								/>
								<path
									d='M9.8,24.8c-0.2,0-0.4,0-0.7,0.1c-2.3,0.4-3.9,2.5-3.5,4.9l7.6,46.9c1.9,11.8,11.2,20.6,22.8,22v2.1v9.8v2.1h-8.7
                  c-2.3,0-4.2,1.9-4.2,4.2v4h29.5v-4c0-2.3-1.9-4.2-4.2-4.2h-8.3v-2.1V101v-2.1h12c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2H39.4
                  c-8.9,0-16.4-6.4-17.8-15.2L14,28.4C13.7,26.3,11.9,24.8,9.8,24.8z'
								/>
							</g>
						</svg>
						<div style={{ marginLeft: '0.8rem' }}>
							<p>Careers Submission</p>
						</div>
					</div>
				</div>

				<div className={styles.formArea} style={{ marginBottom: '4rem' }}>
					<FormTwo />
				</div>
			</div>
		</>
	)
}

export default talk
