import React from 'react';
import styles from "../styles/NavBar.module.css";
import { Link } from 'react-router-dom';

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className={styles.navbar}>
        {/* <div className={styles.navLinks}> */}
          <div className={styles.smallLinks}>
            <Link to="/info" className={styles.navIcon}>Information</Link>
            <Link to="/game" className={styles.navIcon}>Game</Link>
          </div>
        
          <Link to="/" className={`${styles.navIcon} ${styles.largeTitle}`} style={{fontSize: '3rem'}}>Mason and Sofia</Link>

          <div className={styles.smallLinks}>
            <Link to="/registry" className={styles.navIcon}>Registry</Link>
            <Link to="/attendance" className={styles.navIcon}>Attendance</Link>
          </div>
        {/* </div> */}
    </div>
  )
}

export default NavBar;