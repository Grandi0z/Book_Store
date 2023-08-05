import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/root.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Root() {
  return (
    <div id="root" className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Bookstore CMS</h1>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <NavLink to="/" className={styles.a}>
                Books
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/categories" className={styles.a}>
                Categories
              </NavLink>
            </li>
          </ul>
          <button type="button" className={styles.button}>
            <NavLink to="/profile" className={styles.profile}>
              <i className="bi bi-person-circle" />
            </NavLink>
          </button>
        </nav>
      </header>
      <div className={styles.details}>
        <Outlet />
      </div>
    </div>

  );
}

export default Root;
