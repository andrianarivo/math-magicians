import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import styles from '../styles/Layout.module.css';

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Outlet />
    </div>
  );
}
