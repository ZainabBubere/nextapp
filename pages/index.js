import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Deserunt anim ipsum laborum excepteur id veniam consectetur nostrud. Veniam eu aliquip qui et ipsum enim irure. Proident sint commodo et cupidatat aute eiusmod dolor laborum nulla. Pariatur cillum laborum dolor id enim veniam reprehenderit exercitation esse tempor dolore. Ex culpa esse ad est laboris nostrud sunt est dolore enim. Duis qui aliqua officia elit.</p>
        <p className={styles.text}>Deserunt anim ipsum laborum excepteur id veniam consectetur nostrud. Veniam eu aliquip qui et ipsum enim irure. Proident sint commodo et cupidatat aute eiusmod dolor laborum nulla. Pariatur cillum laborum dolor id enim veniam reprehenderit exercitation esse tempor dolore. Ex culpa esse ad est laboris nostrud sunt est dolore enim. Duis qui aliqua officia elit.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
