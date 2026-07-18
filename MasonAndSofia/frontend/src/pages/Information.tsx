import React from 'react'
import styles from '../styles/Information.module.css';

const Information = () => {
  return (
    <div className={styles.infoPage}>
      <h2 className={styles.arriveTitle}>How to Arrive</h2>
      <div className={styles.locationDiv}>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4219.417989121397!2d-16.576761923946943!3d28.363434496248935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a805c4b67f567%3A0xb09894848b0d79a7!2sFinca%20Las%20Molinas!5e1!3m2!1sen!2sus!4v1784404036648!5m2!1sen!2sus" 
        width="600" 
        height="450" 
        style={{border:0}} 
        allowFullScreen
        loading="lazy" 
        referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className={styles.address}>TF-326, 6, 38410 Los Realejos, Santa Cruz de Tenerife, Spain</p>
      <p>Put dress code, colors that combine nicely, and outfit examples</p>

    </div>
  )
}

export default Information;