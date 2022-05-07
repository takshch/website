import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default Navbar;
