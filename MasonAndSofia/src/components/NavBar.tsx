import React from 'react';
import styles from "../styles/NavBar.module.css";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navLinks}>
            <Link to="/" className={styles.navIcon}>Mason and Sofia</Link>
            <Link to="/game" className={styles.navIcon}>Game</Link>
        </div>
    </div>
  )
}

export default NavBar;