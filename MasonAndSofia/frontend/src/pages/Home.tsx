import React from 'react';
import Countdown from '../components/Countdown';
import styles from '../styles/index.module.css';

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <div className={styles.homePage}>
        <Countdown />
        <div>Picture of invitations coming soon</div>
      </div>
    </>
  )
}

export default Home;