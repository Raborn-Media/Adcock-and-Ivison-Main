import styles from'../styles/layout.module.css'
import Footer from'./Footer'
import Header from'./Header'
import Image from 'next/image'
const Layout = ({children}) => {
  return (
    <>
    <Header />
    <main>
      <section>
        <div className={styles.back}></div>
      </section>
    </main>
      
    
    <Footer />
    </>    
  )
}
export default Layout
