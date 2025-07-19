import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }>
              Inicio
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/aplicadores"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }>
              Aplicadores
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
