import styles from '../styles/AmazonCards.module.css';

interface cardProps {
    amazonLink?: string,
    picture?: string
}

const AmazonCards = ({amazonLink, picture} : cardProps) => {
  return (
    <div className={styles.card}>
        <img src={picture} className={styles.productImg} />
        <div className={styles.buySection}>
            <a href={amazonLink} className={styles.buyBtn}>
                Buy
            </a>
        </div>
    </div>
  )
}

export default AmazonCards