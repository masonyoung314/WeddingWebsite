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
    setDresses([...goodDresses]);
    setGoodDresses([]);
  }

  const goodClick = () => {

    let updatedDresses = dresses.filter(d => d !== currDress);
    setDresses(updatedDresses);

    let updatedGoodDresses: string[] = goodDresses.slice(0);
    updatedGoodDresses.push(currDress);

    setGoodDresses(updatedGoodDresses);
    console.log(`Added ${currDress} to good dresses`);

    console.log("Printing good dresses");
    for (var i = 0; i < updatedGoodDresses.length; i++) {
      console.log(updatedGoodDresses[i]);
    }
    console.log(`UpdatedDresses length = ${updatedDresses.length}`);
    console.log(`updatedGoodDresses length = ${updatedGoodDresses.length}`);


    if (updatedDresses.length === 0 && updatedGoodDresses.length === 1) {
      console.log("Setting winner in good dresses");
      setWinner(updatedGoodDresses[0]);
      setCurrDress(updatedGoodDresses[0]);
      return;
    }

    if (updatedDresses.length === 0) {
      console.log("Resetting arrays in good click");
      resetArrays();
    }

    let newCurrDress: string = "";

    if (updatedDresses.length !== 0) {
      newCurrDress = chooseImg(updatedDresses);
    }
    else {
      newCurrDress = chooseImg(updatedGoodDresses);
    }
    
    setCurrDress(newCurrDress);

  };

  const checkInDresses = (arr: string[], dress: string) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == dress) {
        return true;
      }
    }
    return false;
  };

  const badClick = () => {
    console.log("Got into badClick function");
    const updatedDresses = dresses.filter(d => d !== currDress);
    setDresses(updatedDresses);
    console.log("Updated dresses in badClick");

    if (updatedDresses.length === 0 && goodDresses.length === 1) {
      setWinner(goodDresses[0]);
      setCurrDress(goodDresses[0]);
      console.log("And we have a winner... stemming from badClick");
      return;
    }

    let updatedGoodDresses: string[] = goodDresses.slice(0);
    if (checkInDresses(goodDresses, currDress)) {
      updatedGoodDresses = updatedGoodDresses.filter(d => d !== currDress);
      console.log(`Removed ${currDress} from goodDresses`);
      setGoodDresses(updatedGoodDresses);
    }

    if (updatedDresses.length === 0) {
      console.log("Trying to reset arrays");
      resetArrays();
    }

    let newCurrDress: string = "";
    if (updatedDresses.length !== 0) {
      newCurrDress = chooseImg(updatedDresses);
    }  
    else {
      newCurrDress = chooseImg(updatedGoodDresses);
    }
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
