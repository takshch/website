import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>

      <div className={styles.route_index}>
        <div className={styles.heading}>
          Hello World
        </div>
      </div>
    </>
  )
}
