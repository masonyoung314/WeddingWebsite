import React from "react";
import { useState } from "react";
import phone from "../assets/Iphone.png";
import styles from "../styles/Game.module.css";
import good from "../assets/Good.png";
import bad from "../assets/Bad.png";
import one from "../assets/coolThingOne.png";
import two from "../assets/coolThingTwo.jpeg";
import three from "../assets/coolThingThree.jpg";
import four from "../assets/coolThingFour.webp";
import five from "../assets/coolThingFive.jpg";

type Props = {};

// let goodDresses: string[] = [];

function Game({}: Props) {

  const [currDress, setCurrDress] = useState(one);
  const [winner, setWinner] = useState("");
  const [dresses, setDresses] = useState([one, two, three, four, five]);

  function chooseImg(arr: string[]) {
    const numDresses: number = arr.length;

    let idx: number = Math.floor(Math.random() * numDresses);
    let choice: string = arr[idx];

    while (choice == currDress && arr.length > 1) {
      idx = Math.floor(Math.random() * numDresses);
      choice = arr[idx];
    }

    return choice;
  };

  const goodClick = () => {

    if (dresses.length === 1) {
      setWinner(dresses[0]);
      setCurrDress(dresses[0]);
      return;
    }

    let newCurrDress = chooseImg(dresses);
    setCurrDress(newCurrDress);

  };

  const badClick = () => {
    const updatedDresses = dresses.filter(d => d !== currDress);
    setDresses(updatedDresses);

    if (updatedDresses.length === 1) {
      setWinner(updatedDresses[0]);
      setCurrDress(updatedDresses[0]);
      return;
    }

    let newCurrDress = chooseImg(updatedDresses);
    setCurrDress(newCurrDress);

  };

  return (
    <>
      <div className={styles.gameWrapper}>
        <div className={styles.phoneContainer}>
          <img src={phone} alt="Iphone Outline" className={styles.img}/>
          {(winner == "") && <input 
          type="image"  
          src={good} 
          name="saveForm"
          onClick={goodClick} 
          className={styles.goodBtn} />}
          {(winner == "") && <input 
          type="image" 
          src={bad} 
          name="saveForm" 
          onClick={badClick}
          className={styles.badBtn} />}
          {winner == "" ? 
          (<img src={currDress} alt="Image of wedding dress" className={styles.dress}/> 
          ) : (<img src={winner} alt="Image of winning dress" className={styles.dress} />

          )}
          {winner !== "" && <h1 className={styles.winnerMessage}>Your final guess is...</h1>}
        </div>
      </div>
      
    </>
  );
};

export default Game;
