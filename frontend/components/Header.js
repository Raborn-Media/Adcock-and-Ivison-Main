import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image
            src="/Adcock_logo.svg"
            alt="Adcock Logo"
            width={400}
            height={120}
          />
        </div>
        <div className={styles.topright}>
          <div className={styles.toprightinfo}>
            <Image
              src="/free_consultation_icon.svg"
              alt="Adcock Logo"
              width={30}
              height={30}
            />
            <p>FREE CONSULTATION</p>
          </div>
          <div className={styles.toprightinfo}>
            <div className={styles.toprightsvg}>
              <svg
                version="1.1"
                id="Isolation_Mode"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 102.7 102.9"
                enable-background="new 0 0 102.7 102.9"
                space="preserve"
                fill="#fff"
                width={28}
                height={28}
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
            </div>
            <p>PHONE: 601.898.9887</p>
          </div>
        </div>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/your">YOUR ATTORNEYS</Link>
          </li>
          <li>
            <Link href="/mycase">YOUR CASE</Link>
          </li>
          <li>
            <Link href="/news">IN THE NEWS</Link>
          </li>
          <li>
            <Link href="/talk">TALK TO US</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
