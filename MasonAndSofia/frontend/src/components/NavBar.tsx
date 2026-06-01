import React from 'react';
import styles from "../styles/NavBar.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import btn from '../assets/realBurger.png';
import { motion, AnimatePresence } from 'motion/react';

type Props = {}

let rotation = 0;

const spinBtn = () => {
  const btn = document.getElementById("burgerBtn");
  rotation += 360;
  btn.style.transform = `rotate(${rotation}deg)`;
}

const NavBar = (props: Props) => {
  const [isBtnSelected, setBtnSelected] = useState<boolean>(false);

  const handleBurgerClick = () => {
    if (isBtnSelected) {
      setBtnSelected(false);
      console.log(isBtnSelected);
      spinBtn();
    }
    else {
      setBtnSelected(true);
      spinBtn();
    }
  }

  return (
    <>
      <div className={styles.navbar}>
            <div className={styles.smallLinks}>
              {isBtnSelected && <Link to="/info" className={styles.navIcon}>Information</Link>}
              {isBtnSelected && <Link to="/game" className={styles.navIcon}>Games</Link>}
            </div>
          
            <Link to="/" className={`${styles.navIcon} ${styles.largeTitle}`} style={{fontSize: '3rem'}}>Mason and Sofia</Link>

            <div className={styles.smallLinks}>
              {isBtnSelected && <Link to="/registry" className={styles.navIcon}>Registry</Link>}
              {isBtnSelected && <Link to="/attendance" className={styles.navIcon}>Attendance</Link>}
            </div>
      </div>
      <div className={styles.navButton}>
        <input 
        type="image"
        src={btn}
        name="burgerMenu"
        onClick={handleBurgerClick}
        className={styles.burgerBtn}
        id="burgerBtn"
        />
      </div>
    </>
  )
}

export default NavBar;