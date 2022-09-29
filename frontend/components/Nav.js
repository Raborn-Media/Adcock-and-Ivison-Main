import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

const Nav = () => {
  return (
		<div className={styles.nav}>
			<Link href={'/claims'}>
				<div className={styles.btmbar}>
					<Image src='/employment_icon.svg' alt='Employment Logo' width={200} height={100} />
					<p>Employment Claims</p>
				</div>
			</Link>

			<Link href={'/injury'}>
				<div className={styles.btmbar}>
					<Image src='/personal_icon.svg' alt='Employment Logo' width={200} height={100} />
					<p>Personal Injury</p>
				</div>
			</Link>

			<Link href={'/medical'}>
				<div className={styles.btmbar}>
					<Image src='/medical_icon.svg' alt='Employment Logo' width={200} height={100} />
					<p>Medical</p>
				</div>
			</Link>

			<Link href={'/business'}>
				<div className={styles.btmbar}>
					<Image src='/business_icon.svg' alt='Employment Logo' width={200} height={100} />
					<p>Business</p>
				</div>
			</Link>

			<Link href={'/insurance'}>
				<div className={styles.btmbar}>
					<Image src='/insurance_icon.svg' alt='Employment Logo' width={200} height={100} />
					<p>Insurance</p>
				</div>
			</Link>
		</div>
	)
};

export default Nav;
