import React from 'react';
import styles from "../styles/NavBar.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import btn from '../assets/realBurger.png';
import { AnimatePresence, motion } from 'motion/react';

type Props = {}

let rotation: number = 0;

const spinBtn = () => {
  const btn: HTMLElement | null = document.getElementById("burgerBtn");
  rotation += 360;
  btn.style.transform = `rotate(${rotation}deg)`;
}

const NavBar = (props: Props) => {
  const [isBtnSelected, setBtnSelected] = useState<boolean>(true);

  const handleBurgerClick = () => {
    const nav: HTMLElement | null = document.getElementById("nav");

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
              <AnimatePresence>
                {isBtnSelected && <motion.div initial= {{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.smallLinks}>
                  <Link to="/info" className={styles.navIcon}>Information</Link>
                  <Link to="/game" className={styles.navIcon}>Games</Link>
                </motion.div>}
              </AnimatePresence>
            </div>
      
            <div>
              <Link to="/" className={`${styles.navIcon} ${styles.largeTitle}`} style={{fontSize: '3rem'}}>Mason and Sofia</Link>
            </div>

            <div className={styles.smallLinks}>
              <AnimatePresence>
                {isBtnSelected && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.smallLinks}>
                  <Link to="/registry" className={styles.navIcon}>Registry</Link>
                  <Link to="/attendance" className={styles.navIcon}>Attendance</Link>
                </motion.div>}
              </AnimatePresence>
            </div>
            
            
      </div>
      {/* <div className={styles.navButton}>
        <input 
        type="image"
        src={btn}
        name="burgerMenu"
        onClick={handleBurgerClick}
        className={styles.burgerBtn}
        id="burgerBtn"
        />
      </div> */}
    </>
  )
}

export default NavBar;