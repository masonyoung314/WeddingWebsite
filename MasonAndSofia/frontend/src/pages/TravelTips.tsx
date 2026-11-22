import styles from "../styles/TravelTips.module.css";
import NavBar from '../components/NavBar';
import TravelTipsFood from "../components/TravelTipsFood";
import guachincheOne from '../assets/guachinche1.png';
import guachincheTwo from '../assets/guachinche2.png';
import guachincheThree from '../assets/guachinche3.png';
import paella1 from "../assets/Paella1.png";
import paella2 from "../assets/Paella2.png";
import paella3 from "../assets/Paella3.png";

const TravelTips = () => {
  return (
    <>
        <div className={styles.travelTipsPage}>
            <NavBar />
            <h2 className={styles.sectionHeader}>Food</h2>
            <TravelTipsFood 
            cuisine="Traditional Canarian Food" 
            restaurant="Guachinche El Primero" 
            location="Santa Úrsula"
            link="https://bodegonelprimero.com/"
            img1={guachincheOne}
            img2={guachincheTwo}
            img3={guachincheThree}
            />
            <TravelTipsFood
            cuisine="Spanish: Paella (in front of the sea)"
            restaurant="Las Aguas"
            location="San Juan de la Rambla"
            link="https://www.facebook.com/share/CMWC3WxsbuLW6qKu/?mibextid=WC7FNe"
            img1={paella1}
            img2={paella2}
            img3={paella3}
            />
            <hr className={styles.sectionBreak} />

            <h2 className={styles.sectionHeader}>Places</h2>
        </div>
    </>
  )
}

export default TravelTips;