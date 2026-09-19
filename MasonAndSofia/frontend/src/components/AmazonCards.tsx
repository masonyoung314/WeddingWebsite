import styles from '../styles/AmazonCards.module.css';

interface cardProps {
    amazonLink?: string,
    picture?: string
}

const AmazonCards = ({amazonLink, picture} : cardProps) => {
  return (
    <div className={styles.card}>
        <div className={styles.imgDiv}>
            <img src={picture} className={styles.productImg} />
        </div>
        <a href={amazonLink} className={styles.link}> 
            <div className={styles.buySection}>
                <p className={styles.buyBtn}>
                    Buy
                </p>
            </div>
        </a>
    </div>
  )
}

export default AmazonCards