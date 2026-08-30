import styles from "../styles/NavBar.module.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import btn from "../assets/burgerBtn.png";
import logo from "../assets/mason_and_sofia_logo.svg";

type Props = {}

let rotation: number = 0;

const spinBtn = () => {
  const btn: HTMLElement | null = document.getElementById("burgerBtn")!;
  rotation += 360;
  btn.style.transform = `rotate(${rotation}deg)`;
}

function NavBar({}: Props) {
  const [isBtnSelected, setBtnSelected] = useState<boolean>(true);
  useEffect(() => {
    setBtnSelected(false);
  }, []);

  const handleBurgerClick = () => {

    if (isBtnSelected) {
      setBtnSelected(false);
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
            
              <AnimatePresence>
                <motion.div initial= {{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`${styles.smallLinks} ${isBtnSelected ? styles.show : ""}`}>
                  <Link to="/info" className={styles.navIcon}>Information</Link>
                  <Link to="/game" className={styles.navIcon}>Games</Link>
                </motion.div>
              </AnimatePresence>
            
      
            <div>
              <Link to="/" className={`${styles.navIcon} ${styles.largeTitle}`} style={{fontSize: '3rem'}}>
                <img src={logo} alt="Mason and Sofia" width="275rem" height="auto"/>
              </Link>
            </div>

            
              <AnimatePresence>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`${styles.smallLinks} ${isBtnSelected ? styles.show : ""}`}>
                  <Link to="/registry" className={styles.navIcon}>Registry</Link>
                  <Link to="/attendance" className={styles.navIcon}>Attendance</Link>
                </motion.div>
              </AnimatePresence>
            
            
            
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