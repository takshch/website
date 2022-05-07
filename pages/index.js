import Head from 'next/head';
import DefaultLayout from '../layouts/index';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Hello World</title>
      </Head>
      <div className={styles.route_index}>
        <div className={styles.heading}>
          Hello World
        </div>
      </div>
    </DefaultLayout>
  )
}
