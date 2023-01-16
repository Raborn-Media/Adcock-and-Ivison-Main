import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from "next/head"
import Script from "next/script";
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

function MyApp({ Component, pageProps }) {
  return (
		<Layout>
			{/* <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_SITE_KEY}
			  scriptProps={{
				  async: false,
				  defer: false,
				  appendTo: "head",
				  nonce: undefined,
			  }}>
				<Component {...pageProps} />
			</GoogleReCaptchaProvider> */}
            <Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="anonymous" />
				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap' rel='stylesheet' />
			</Head>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
