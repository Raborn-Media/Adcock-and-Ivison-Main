import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Headerstyles.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import HamburgerIcon from '../components/Hamburger'

const Header = () => {
	const [showDropNav, setShowDropNav] = useState(false);

	const [headClass, setHeadClass] = useState(styles.header);
	const [navClass, setNavClass] = useState(styles.navList);
	const [hamburgerOpen, setHamburgerOpen] = useState(false)

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen)
	}

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				setHeadClass(styles.headerGrey);
				setNavClass(styles.navListGrey);
			} else {
				setHeadClass(styles.header);
				setNavClass(styles.navList);
			}
		});
	} , []);

    return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap' rel='stylesheet' />
			</Head>
			<div className={headClass}>
				<div className={styles.image}>
					<Link href={'/'}>
						<Image src='/Adcock_logo.svg' alt='Adcock Logo' width={400} height={120} style={{ cursor: 'pointer' }} />
					</Link>
				</div>
				<div className={styles.topright}>
					<Link href={'/talk'}>
						<div className={styles.toprightinfo} style={{ cursor: 'pointer' }}>
							<Image src='/free_consultation_icon.svg' alt='Adcock Logo' width={30} height={30} />
							<p>FREE CONSULTATION</p>
						</div>
					</Link>
					<a href="tel:6018989887">
						<div className={styles.toprightinfo}>
							<Image src='/phone_icon.svg' alt='Adcock Logo' width={30} height={30} />
							<p>PHONE: 601.898.9887</p>
						</div>
					</a>
				</div>
				{/* Header Menu */}
				<ul>
					<li>
						<Link href='/'>HOME</Link>
					</li>
					<li>
						<Link href='/attorneys'>YOUR ATTORNEYS</Link>
					</li>
					<li style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setShowDropNav(!showDropNav)}>
						<svg version='1.1' id='Isolation_Mode' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 397.6 302.4' enableBackground='new 0 0 397.6 302.4' space='preserve' width='1.5rem' fill='#fff' style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}>
							<polygon points='207.8,264.3 208,264.5 351.9,120.6 306,74.7 207.8,173 109.5,74.7 63.6,120.6 207.6,264.5 ' />
						</svg>
						YOUR CASE
						<div className={styles.navDropdown} style={{ display: showDropNav ? '' : 'none' }}>
							<ul className={navClass}>
								<Link href={'/claims'}>
									<li>&bull; Employment Claims</li>
								</Link>
								<Link href={'/injury'}>
									<li>&bull; Personal Injury</li>
								</Link>
								<Link href={'/medical'}>
									<li>&bull; Medical</li>
								</Link>
								<Link href={'/business'}>
									<li>&bull; Business</li>
								</Link>
								<Link href={'/insurance'}>
									<li>&bull; Insurance</li>
								</Link>
							</ul>
						</div>
					</li>
					<li>
						<Link href='/news'>IN THE NEWS</Link>
					</li>
					<li>
						<Link href='/talk'>TALK TO US</Link>
					</li>
				</ul>

				
				<div className="navigation">
					<ul className="navUl">
					<li>
						<Link href='/'>HOME</Link>
					</li>
					<li>
						<Link href='/attorneys'>YOUR ATTORNEYS</Link>
					</li>
					<li style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setShowDropNav(!showDropNav)}>
						<svg version='1.1' id='Isolation_Mode' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 397.6 302.4' enableBackground='new 0 0 397.6 302.4' space='preserve' width='1.5rem' fill='#fff' style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}>
							<polygon points='207.8,264.3 208,264.5 351.9,120.6 306,74.7 207.8,173 109.5,74.7 63.6,120.6 207.6,264.5 ' />
						</svg>
						YOUR CASE &#10148;
						<div className={styles.navDropdown2} style={{ display: showDropNav ? '' : 'none' }}>
							<ul className={navClass}>
								<Link href={'/claims'}>
									<li>&bull; Employment Claims</li>
								</Link>
								<Link href={'/injury'}>
									<li>&bull; Personal Injury</li>
								</Link>
								<Link href={'/medical'}>
									<li>&bull; Medical</li>
								</Link>
								<Link href={'/business'}>
									<li>&bull; Business</li>
								</Link>
								<Link href={'/insurance'}>
									<li>&bull; Insurance</li>
								</Link>
							</ul>
						</div>
					</li>
					<li>
						<Link href='/news'>IN THE NEWS</Link>
					</li>
					<li>
						<Link href='/talk'>TALK TO US</Link>
					</li>

						
					</ul>
						<div className="hamburger" onClick={toggleHamburger}>
							<HamburgerIcon isOpen={hamburgerOpen}/>
						</div>
				</div>


				<style jsx>{`

					.navUl li {
						display: none;
					}
					
					.navigation{
						width: 100%;
						height: 50px;
						display: none;
					}
					
					
					.navigation ul{
						display:flex;
						flex-wrap: wrap;
						float: right;
						margin: 0px;
						padding: 0px;
						overflow: hidden;
					}
					.navigation ul li{
						list-style-type: none;
						padding-right: 10px;
					}
					.hamburger{
						display: none;
						z-index: 6;
					} 
					@media (max-width: 790px){
						.hamburger{
							display:block;
							padding-top: 10px;
							margin-left: 50%;
							z-index: 6;
						}
					
						.navigation {
							display: block;
						}

						.navigation ul{
							display: ${hamburgerOpen ? 'inline' : 'none'};
							background-color: white;
							height: 20vh;
							width: 100vw;
							margin-top: 50px;
							position: fixed;
							
						}

						.navigation ul li {
							color: black;
							text-align: center;
							justify-content: center;
							padding: 15px;
						}

						.navUl li {
							display: flex;
							border: 1px solid black;
							transition: 0.2s ease;
						}
					}
					
					
				`}</style>
			</div>
		</>
	)
};

export default Header;
