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

    setTime(timeParts);
  };

  useEffect(() => {
    timeLeft();

    const interval = setInterval(timeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <div className={styles.title}>
            <h2>Countdown until the big day!</h2>
        </div>

        <div className={styles.clockSpace}>
            <div className={styles.numSpace}>{time?.day1}</div>
            <div className={styles.numSpace}>{time?.day2}</div>
            <div className={styles.numSpace}>{time?.day3}</div>
            <h2 className={styles.colon}>:</h2>
            <div className={styles.numSpace}>{time?.hour1}</div>
            <div className={styles.numSpace}>{time?.hour2}</div>
            <h2 className={styles.colon}>:</h2>
            <div className={styles.numSpace}>{time?.min1}</div>
            <div className={styles.numSpace}>{time?.min2}</div>
            <div className={styles.colon}>:</div>
            <div className={styles.numSpace}>{time?.sec1}</div>
            <div className={styles.numSpace}>{time?.sec2}</div>
        </div>
    </>
  )
}

export default Countdown;