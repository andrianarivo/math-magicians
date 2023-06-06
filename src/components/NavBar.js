import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'calculator', text: 'Calculator' },
    { path: 'quote', text: 'Quotes' },
  ];
  return (
    <nav className={styles.nav}>
      <h2>Math Magicians</h2>
      <ul className={styles.ul}>
        {links.map((link) => (
          <li className={styles.li} key={link.path}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
