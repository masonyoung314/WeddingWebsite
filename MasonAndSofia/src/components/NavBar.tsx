import React from 'react';
import styles from "../styles/NavBar.module.css";
import { Link } from 'react-router-dom';

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navLinks}>
            <Link to="/game" className={styles.navIcon}>Game</Link>
            <Link to="/" className={`${styles.navIcon} ${styles.largeTitle}`} style={{fontSize: '3rem'}}>Mason and Sofia</Link>
            <Link to="/registry" className={styles.navIcon}>Registry</Link>
        </div>
    </div>
  )
}

export default NavBar;