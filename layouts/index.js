import Navbar from "../components/Navbar";
import styles from '../styles/DefaultLayout.module.scss';

function DefaultLayout({ children }) {
  return (
    <div className={styles['default-layout']}>
      <Navbar />

      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
