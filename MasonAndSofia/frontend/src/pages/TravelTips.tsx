import styles from "../styles/TravelTips.module.css";
import NavBar from '../components/NavBar';
import TravelTipsFood from "../components/TravelTipsFood";
import guachincheOne from '../assets/guachinche1.png';
import guachincheTwo from '../assets/guachinche2.png';
import guachincheThree from '../assets/guachinche3.png';
import paella1 from "../assets/Paella1.png";
import paella2 from "../assets/Paella2.png";
import paella3 from "../assets/Paella3.png";
import venezuelan1 from "../assets/Venezuelan1.png";
import venezuelan2 from "../assets/Venezuelan2.png";
import venezuelan3 from "../assets/Venezuelan3.png";
import flo1 from "../assets/Flo1.png";
import flo2 from "../assets/Flo2.png";
import flo3 from "../assets/Flo3.png";
import por1 from "../assets/PorSabor1.png";
import por2 from "../assets/PorSabor2.png";
import por3 from "../assets/PorSabor3.png";
import grados1 from "../assets/grados1.png";
import grados2 from "../assets/grados2.png";
import grados3 from "../assets/grados3.png";

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
            <TravelTipsFood
                cuisine="Venezuelan Food"
                restaurant="Little Roraima"
                location="Nivaria Mall Center in Santa Cruz de Tenerife"
                link="https://littleroraima.com/"
                img1={venezuelan1}
                img2={venezuelan2}
                img3={venezuelan3}
            />
            <TravelTipsFood
                cuisine="Cheesecake"
                restaurant="FloBakery"
                location="La Orotava"
                link="https://www.instagram.com/flo.bakery_/?hl=en"
                img1={flo1}
                img2={flo2}
                img3={flo3}
            />
            <TravelTipsFood
                cuisine="Ice Cream"
                restaurant="Por Sabor"
                location="Puerto de La Cruz"
                link="https://www.porsabor-helado.com/es"
                img1={por1}
                img2={por2}
                img3={por3}
            />
            <TravelTipsFood
                cuisine="Premium Burgers and Pizza"
                restaurant="400 grados"
                location="Los Cristianos"
                link="https://grupo-infinity.com/400-grados-urban-food/"
                img1={grados1}
                img2={grados2}
                img3={grados3}
            />

            <hr className={styles.sectionBreak} />

            <h2 className={styles.sectionHeader}>Places</h2>
        </div>
    </>
  )
}

export default TravelTips;