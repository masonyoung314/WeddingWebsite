import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../styles/Countdown.module.css';

const Countdown = () => {

  type timeRemaining = {
    sec1: string,
    sec2: string, 
    min1: string,
    min2: string,
    hour1: string, 
    hour2: string,
    day1: string,
    day2: string,
    day3: string
  };

  const [time, setTime] = useState<timeRemaining | null>(null);
  const weddingDate: string = '2027-09-03T23:59:59-04:00';

  let day1Rotation: number = 0;
  let day2Rotation: number = 0;
  let day3Rotation: number = 0;
  let hour1Rotation: number = 0;
  let hour2Rotation: number = 0;
  let min1Rotation: number = 0;
  let min2Rotation: number = 0;
  let sec1Rotation: number = 0;
  let sec2Rotation: number = 0;


  const timeLeft = () => {
    const now: string = new Date().toISOString();
    const totalTime: number = Date.parse(weddingDate) - Date.parse(now);
    const seconds: number = Math.floor((totalTime / 1000) % 60);
    const minutes: number = Math.floor((totalTime / (1000 * 60)) % 60);
    const hours: number = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
    const days: number = Math.floor((totalTime / (1000 * 60 * 60 * 24))); 

    const totSecs: string = seconds.toString();
    const sec1: string = totSecs.length === 2 ? totSecs[0] : '0';
    const sec2: string = totSecs.length === 2 ? totSecs[1] : totSecs[0];
    const totMins: string = minutes.toString();
    const min1: string = totMins.length === 2 ? totMins[0] : '0';
    const min2: string = totMins.length === 2 ? totMins[1] : totMins[0];
    const totHours: string = hours.toString();
    const hour1: string = totHours.length === 2 ? totHours[0] : '0';
    const hour2: string = totHours.length === 2 ? totHours[1] : totHours[0];
    const totDays: string = days.toString();
    const day1: string = totDays.length === 3 ? totDays[0] : '0';
    const day2: string = totDays.length === 3 ? totDays[1] : totDays[0];
    const day3: string = totDays.length === 3 ? totDays[2] : totDays[1];

    const timeParts: timeRemaining = {
        sec1,
        sec2,
        min1,
        min2,
        hour1,
        hour2,
        day1,
        day2,
        day3
    };

    setTime(prevTime => {
      if (timeParts.day1 !== prevTime?.day1) {
        const day1Square: HTMLElement | null = document.getElementById("day1");
        day1Rotation += 360;
        day1Square.style.transform = `rotate(${day1Rotation}deg)`;
      }
      if (timeParts.day2 !== prevTime?.day2) {
        const day2Square: HTMLElement | null = document.getElementById("day2");
        day2Rotation += 360;
        day2Square.style.transform = `rotate(${day2Rotation}deg)`;
      }
      if (timeParts.day3 !== prevTime?.day3) {
        const day3Square: HTMLElement | null = document.getElementById("day3");
        day3Rotation += 360;
        day3Square.style.transform = `rotate(${day3Rotation}deg)`;
      }
      if (timeParts.hour1 !== prevTime?.hour1) {
        const hour1Square: HTMLElement | null = document.getElementById("hour1");
        hour1Rotation += 360;
        hour1Square.style.transform = `rotate(${hour1Rotation}deg)`;
      }
      if (timeParts.hour2 !== prevTime?.hour2) {
        const hour2Square: HTMLElement | null = document.getElementById("hour2");
        hour2Rotation += 360;
        hour2Square.style.transform = `rotate(${hour2Rotation}deg)`;
      }
      if (timeParts.min1 !== prevTime?.min1) {
        const min1Square: HTMLElement | null = document.getElementById("min1");
        min1Rotation += 360;
        min1Square.style.transform = `rotate(${min1Rotation}deg)`;
      }
      if (timeParts.min2 !== prevTime?.min2) {
        const min2Square: HTMLElement | null = document.getElementById("min2");
        min2Rotation += 360;
        min2Square.style.transform = `rotate(${min2Rotation}deg)`;
      }
      if (timeParts.sec1 !== prevTime?.sec1) {
        const sec1Square: HTMLElement | null = document.getElementById("sec1");
        sec1Rotation += 360;
        sec1Square.style.transform = `rotate(${sec1Rotation}deg)`;
      }

      return timeParts
    });

    // sec2 always changes
    const square: HTMLElement | null = document.getElementById("sec2");
    sec2Rotation += 360;
    square.style.transform = `rotate(${sec2Rotation}deg)`;

  };

  useEffect(() => {
    timeLeft();

    const interval = setInterval(timeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        {/* <div className={styles.title}>
            <h2>Countdown until the big day!</h2>
        </div> */}

        <div className={styles.clockSpace}>
            <div className={styles.numSpace} id="day1">{time?.day1}</div>
            <div className={styles.numSpace} id="day2">{time?.day2}</div>
            <div className={styles.numSpace} id="day3">{time?.day3}</div>
            <h2 className={styles.colon}>:</h2>
            <div className={styles.numSpace} id="hour1">{time?.hour1}</div>
            <div className={styles.numSpace} id="hour2">{time?.hour2}</div>
            <h2 className={styles.colon}>:</h2>
            <div className={styles.numSpace} id="min1">{time?.min1}</div>
            <div className={styles.numSpace} id="min2">{time?.min2}</div>
            <h2 className={styles.colon}>:</h2>
            <div className={styles.numSpace} id="sec1">{time?.sec1}</div>
            <div className={styles.numSpace} id="sec2">{time?.sec2}</div>
        </div>
    </>
  )
}

export default Countdown;