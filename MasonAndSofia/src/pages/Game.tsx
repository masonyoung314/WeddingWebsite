import React from "react";
import phone from "../assets/Iphone.png";
import styles from "../styles/Game.module.css";
import good from "../assets/Good.png";
import bad from "../assets/Bad.png";

type Props = {};

function Game({}: Props) {
  return (
    <>
      <div className={styles.phoneContainer}>
        <img src={phone} alt="Iphone Outline" className={styles.img}/>
        <input type="image" src={good} name="saveForm" className={styles.goodBtn} />
        <input type="image" src={bad} name="saveForm" className={styles.badBtn} />
        <img src={choice} alt="Image of wedding dress"></img>
      </div>
    </>
    
  );
};

export default Game;
