import React from 'react';
import Countdown from '../components/Countdown';
import styles from '../styles/index.module.css';
import one from '../assets/saveTheDate1.png';
import two from '../assets/saveTheDate2.png';

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <div className={styles.homePage}>
        <Countdown />
        <div className={styles.images}>
          <img className={styles.saveDate1} src={one} />
          <img className={styles.saveDate2} src={two} />
        </div>
        <div>Picture of invitations coming soon</div>
      </div>
    </>
  )
}

export default Home;