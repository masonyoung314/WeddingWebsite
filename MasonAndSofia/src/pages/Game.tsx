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
  const [goodDresses, setGoodDresses] = useState([]);

  function chooseImg(arr: string[]) {
    const numDresses: number = arr.length;

    let idx: number = Math.floor(Math.random() * numDresses);
    let choice: string = arr[idx];

    while (choice == currDress && arr.length > 1) {
      idx = Math.floor(Math.random() * numDresses);
      choice = arr[idx];
    }

    if (arr.length === 0) {
      idx = Math.floor(Math.random() * goodDresses.length);
      choice = goodDresses[idx];
    }

    return choice;
  };

  const resetArrays = () => {
    setDresses(goodDresses);
    setGoodDresses([]);
  }

  const goodClick = () => {

    if (goodDresses.length === 1 && dresses.length === 0) {
      setWinner(dresses[0]);
      setCurrDress(dresses[0]);
      return;
    }

    let updatedDresses = dresses.filter(d => d !== currDress);
    setDresses(updatedDresses);

    if (updatedDresses.length === 0) {
      resetArrays;
    }

    setGoodDresses(prevDresses => [...prevDresses, currDress]);
    console.log(`Added ${currDress} to good dresses`);

    let newCurrDress = chooseImg(updatedDresses);
    setCurrDress(newCurrDress);

  };

  const checkInDresses = (arr: string[], dress: string) => {
    for (var i = 0; arr.length; i++) {
      if (arr[i] == dress) {
        return true;
      }
    }
    return false;
  };

  const badClick = () => {
    const updatedDresses = dresses.filter(d => d !== currDress);
    setDresses(updatedDresses);

    if (updatedDresses.length === 0 && goodDresses.length === 1) {
      setWinner(updatedDresses[0]);
      setCurrDress(updatedDresses[0]);
      return;
    }

    if (updatedDresses.length === 0) {
      resetArrays;
    }

    let updatedGoodDresses = [];
    if (checkInDresses(goodDresses, currDress)) {
      updatedGoodDresses = goodDresses.filter(d => d !== currDress);
      console.log(`Removed ${currDress} from goodDresses`);
      setGoodDresses(updatedGoodDresses);
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
