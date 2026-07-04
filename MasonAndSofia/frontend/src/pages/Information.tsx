import React from 'react'
import styles from '../styles/Information.module.css';

const Information = () => {
  return (
    <div className={styles.infoPage}>
      <h2 className={styles.arriveTitle}>How to Arrive</h2>
      <div className={styles.locationDiv}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62630.33531850026!2d-16.243358702465446!3d28.49900170964801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1783195464201!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin" 
        />
      </div>
      <p className={styles.address}>Los Llanos, Santa Cruz de Tenerife, Spain</p>
      <p>Put dress code, colors that combine nicely, and outfit examples</p>

    </div>
  )
}

export default Information;