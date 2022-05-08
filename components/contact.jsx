import Image from "next/image";
import Link from "next/link";
import styles from '../styles/components/contact.module.scss';

function Contact({ href, imageSrc, text }) {
  return (
    <Link href={href} target="_blank">
      <a className={styles.contact}>
        <div className={styles.icon}>
          <Image src={imageSrc} alt={text} width="25" height="25" unoptimized={true} />
        </div>
        <span className={styles.text}>
          {text}
        </span>
      </a>
    </Link>
  );
}

export default Contact;
