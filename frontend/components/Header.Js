import Link from 'next/link'
import headerStyles from'../styles/header.module.css'
import Image from 'next/image'
 const Header = () => {
  return (
    <>
    
    <div className={headerStyles.header}> 
      <Image src="/Adcock_logo.svg" alt="ADCOCK LOGO" width={200} height={200}/> 
        
      <ul>
          <li>
              <Link href='/'>HOME</Link>
          </li> 
          <li>
            <Link href='/attorneys'>YOUR ATTORNEYS</Link>
          </li>
          <li>
              <Link href='/cases'>YOUR CASE</Link>
          </li>
          <li>
              <Link href='/news'>IN THE NEWS</Link>
          </li>
          <li>
              <Link href='/talk'>TALK TO US</Link>
          </li>
      </ul>
    </div>
    
    </>
  )
}

export default Header