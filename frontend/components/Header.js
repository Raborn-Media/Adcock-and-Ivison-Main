import Link from "next/link";
import Image from "next/image";
import headerStyles from "../styles/Header.module.css";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <>
      <div className={headerStyles.header}>
        <div className={styles.image}>
          <Image
            src="/Adcock_logo.svg"
            alt="Adcock Logo"
            width={400}
            height={120}
          />
        </div>
        <ul>
          <li>
            <Link href="/home">HOME</Link>
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
