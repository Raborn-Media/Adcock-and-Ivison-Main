import '../styles/globals.css'
import Layout from '../components/Layout'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

function MyApp({ Component, pageProps }) {
  return (
		<Layout>
			<GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_SITE_KEY}>
				<Component {...pageProps} />
			</GoogleReCaptchaProvider>
		</Layout>
	)
}

export default MyApp
