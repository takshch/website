import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Contact from '../components/contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>

      <div className={styles.route_index}>
        <div className={styles.intro}>
          <span className={styles.heading}>Hi there,</span>

          <p>
            I am {''}
            <Link href="https://www.linkedin.com/in/takshch/" target="_blank">
              <a>Taksh Chanana</a>
            </Link>
            {''} and I love to build and scale web apps.
          </p>

          <p>
            I have 2 years of experience in Frontend and around 1 year of
            experience in Full stack.
          </p>

          <p>
            I have worked in a startup and small company and built their web
            apps.
          </p>

          <div className={styles.contact}>
            <Contact
              href="https://www.linkedin.com/in/takshch"
              imageSrc="/icons/linkedin.png"
              text="/in/takshch"
            />
            <Contact
              href="https://github.com/takshch"
              imageSrc="/icons/github.png"
              text="/takshch"
            />
          </div>
        </div>
      </div>
    </>
  );
}
