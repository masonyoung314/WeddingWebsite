import styles from "../styles/TravelTipsFood.module.css";

interface SectionProps {
    cuisine?: string,
    restaurant?: string,
    location?: string,
    link?: string,
    img1: string,
    img2: string,
    img3: string
}

const TravelTipsFood = ({cuisine, restaurant, location, link, img1, img2, img3} : SectionProps) => {
  return (
    <>
        <div className={styles.foodSection}>
            <h3 className={styles.foodType}><b><i>{cuisine}</i></b></h3>
            <h3 className={styles.foodInfo}><u>Restaurant:</u> {restaurant?.toUpperCase()}</h3>
            <h3 className={styles.foodInfo}><u>Location:</u> {location}</h3>
            <div className={styles.imagesDiv}>
                <img src={img1} className={styles.img} />
                <img src={img2} className={styles.img} />
                <img src={img3} className={styles.img} />
            </div>
            
            <a href={link} className={styles.link}>
                <div className={styles.webButton}>Check it out!</div>
            </a>
        </div>
    </>
  )
}

export default TravelTipsFood;