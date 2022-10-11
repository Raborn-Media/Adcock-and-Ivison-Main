export default async function handler(req, res) {
	console.log('start verify.js')
	console.log(req.method)
	if (req.method === 'POST') {
		console.log('enter if')
		try {
			fetch('https://www.google.com/recaptcha/api/siteverify', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `secret=${process.env.REACT_APP_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
			})
				.then((reCaptchaRes) => reCaptchaRes.json())
				.then(console.log('fetched captcha api'))
				.then((reCaptchaRes) => {
					console.log(reCaptchaRes, 'Response from Google reCaptcha verification API')
					if (reCaptchaRes?.score > 0.5) {
						// Save data to the database from here
						res.status(200).json({
							status: 'success',
							message: 'Contact Form submitted successfully',
						})
					} else {
						res.status(200).json({
							status: 'failure',
							message: 'Google ReCaptcha Failure',
						})
					}
				})
		} catch (err) {
			res.status(405).json({
				status: 'failure',
				message: 'Error submitting the contact form',
			})
		}
	}
	else {
		console.log('enter else')
		res.status(405)
		res.end()
	}
}

