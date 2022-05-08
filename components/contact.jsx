import Image from "next/image";
import Link from "next/link";
import styles from '../styles/components/contact.module.scss';

function Contact({ href, imageSrc, text }) {
  return (
    <Link href={href}>
      <a className={styles.contact} target="_blank">
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
