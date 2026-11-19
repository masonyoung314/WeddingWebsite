import styles from "../styles/TravelTips.module.css";
import NavBar from '../components/NavBar';
import guachincheOne from '../assets/guachinche1.png';
import guachincheTwo from '../assets/guachinche2.png';
import guachincheThree from '../assets/guachinche3.png';

const TravelTips = () => {
  return (
    <>
        <div className={styles.travelTipsPage}>
            <NavBar />
            <div className={styles.foodSection}>
                <h2 className={styles.sectionHeader}>Food</h2>
                <h3 className={styles.foodType}><b>Traditional Canarian Food</b></h3>
                <h3 className={styles.foodInfo}><u>Restaurant:</u> Guanchinche El Primero</h3>
                <h3 className={styles.foodInfo}><u>Location:</u> Santa Úrsula</h3>
                <div className={styles.imagesDiv}>
                    <img src={guachincheOne} className={styles.img} />
                    <img src={guachincheTwo} className={styles.img} />
                    <img src={guachincheThree} className={styles.img} />
                </div>
                <a href="https://bodegonelprimero.com/" className={styles.link}>
                    <div className={styles.webButton}>Check it out!</div>
                </a>
            </div>

            <hr className={styles.sectionBreak} />

            <div className={styles.placesSection}>
                <h2 className={styles.sectionHeader}>Places</h2>
            </div>
        </div>
    </>
  )
}

export default TravelTips;