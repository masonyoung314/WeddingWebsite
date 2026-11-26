import styles from "../styles/TravelTips.module.css";
import NavBar from '../components/NavBar';
import TravelPlacesTiles from "../components/TravelPlacesTiles";
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
import nature from '../assets/nature.jpg';
import town from '../assets/laLaguna.jpeg';
import touristCity from '../assets/puerto.jpeg';
import shopping from '../assets/santaCruz.jpg';
import teide from '../assets/teide.jpg';
import anaga from '../assets/anaga.jpg';
import laCaldera from '../assets/laCaldera.jpg';
import map from '../assets/MapTenerife.jpg';
import laLaguna2 from '../assets/LaLaguna2.jpg';
import puertoCity from '../assets/puertoCity.jpg';
import puertoBeach from '../assets/puertoBeach.jpg';
import loroParque from '../assets/loroParque.jpg';

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
            <div className={styles.placeSection}>
                <h2 className={styles.sectionHeader}>Places</h2>
                <h2 className={styles.discover} style={{color: "#542D3B", paddingBottom: "1rem"}}><i>Discover Tenerife</i></h2>
                <p style={{color: "#542D3B", paddingBottom: "1rem"}}>From beautiful landscapes and charming coastal towns to delicious food, there is a lot to explore in Tenerife. 
                    Here are some of our favorite places!</p>
                <img src={map} className={styles.tenerifeImg}/>
                <h2 style={{color: "#542D3B", paddingTop: "1rem", paddingBottom: "1rem"}}>What would you like to do?</h2>
                <div className={styles.optionsGrid}>
                    <div className={styles.gridImgContainer}>
                        <a href="#nature">
                            <img src={nature} className={styles.gridImg} />
                        </a>
                        <div className={styles.gridExtraInfo}>
                            <h2 className={styles.extraInfoTitle}>Nature</h2>
                            <p>Mountains, forrest, and hiking</p>
                        </div>
                    </div>
                    <div className={styles.gridImgContainer}>
                        <a href="#culture">
                            <img src={town} className={styles.gridImg} />
                        </a>
                        <div className={styles.gridExtraInfo}>
                            <h2 className={styles.extraInfoTitle}>Local Culture</h2>
                            <p>Historic town and architecture</p>
                        </div>
                    </div>
                    <div className={styles.gridImgContainer}>
                        <a href="#tourist">
                            <img src={touristCity} className={styles.gridImg} />
                        </a>
                        <div className={styles.gridExtraInfo}>
                            <h2 className={styles.extraInfoTitle}>Walking & Touristy</h2>
                            <p>Ice cream, food, nice walking areas, and cafés</p>
                        </div>
                    </div>
                    <div className={styles.gridImgContainer}>
                        <a href="#urban">
                            <img src={shopping} className={styles.gridImg} />
                        </a>
                        <div className={styles.gridExtraInfo}>
                            <h2 className={styles.extraInfoTitle}>Shopping & Urban Life</h2>
                            <p>Shopping, city (and Sofi's university)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sections}>
                    <section id="nature" className={styles.sectionSection}>
                        <h2 className={styles.sectionTitle}>Nature & Adventure</h2>
                        <hr className={styles.sectionBreak} />
                        <TravelPlacesTiles 
                        configuration={1}
                        sectionSubTitle="Mount Teide"
                        sectionSubInfo="Visit Spain's highest mountain and experience the incredible volcanic landscapes."
                        img={teide}
                        link="https://www.volcanoteide.com/en"
                        />
                        <TravelPlacesTiles 
                        configuration={2}
                        sectionSubTitle="Parque Rural de Anaga"
                        sectionSubInfo="Visit ancient laurel forrests with sharp volcanic peaks, black sand beaches, and deep ravines in Tenerife's oldest region."
                        img={anaga}
                        link="https://www.hellocanaryislands.com/nature-spaces/tenerife/anaga-rural-park/"
                        />
                        <TravelPlacesTiles
                        configuration={1}
                        sectionSubTitle="La Caldera"
                        sectionSubInfo="Visit a park in the mountain that serves as the trailhead for beautiful hiking trails through the monteverde forrests of Tenerife above the town of La Orotava."
                        link="https://www.laorotava.es/turismo/en/la-caldera-recreational-area%EF%BF%BC%EF%BF%BC%EF%BF%BC/"
                        img={laCaldera}
                        />
                    </section>
                    
                    <section id="culture">
                        <h2 className={styles.sectionTitle}>Local Culture</h2>
                        <hr className={styles.sectionBreak} />
                        <TravelPlacesTiles
                        configuration={1}
                        sectionSubTitle="La Laguna"
                        sectionSubInfo="Visit the beautiful historic town of La Laguna to see old, narrow streets; traditional Canarian architecture; churches; and delicious cafés."
                        link="https://www.hellocanaryislands.com/places-full-of-charm/tenerife/la-laguna-old-town/"
                        img={laLaguna2}
                        />
                    </section>

                    <section id="tourist">
                        <h2 className={styles.sectionTitle}>Walking & Other Tourism</h2>
                        <hr className={styles.sectionBreak} />
                        <TravelPlacesTiles
                        configuration={1}
                        sectionSubTitle="Puerto de La Cruz"
                        sectionSubInfo="Visit the city of Puerto de La Cruz for beautiful views, an abundance of shops and cafés, and even ice cream!"
                        link="https://en.wikipedia.org/wiki/Puerto_de_la_Cruz"
                        img={puertoCity}
                        />

                        <TravelPlacesTiles 
                        configuration={2}
                        sectionSubTitle="Puerto de La Cruz Beach"
                        sectionSubInfo="Visit one of a few black sand beaches around Puerto de La Cruz for a relaxing afternoon in the sun."
                        link="https://en.wikipedia.org/wiki/Puerto_de_la_Cruz"
                        img={puertoBeach}
                        />

                        <TravelPlacesTiles
                        configuration={1}
                        sectionSubTitle="Loro Parque"
                        sectionSubInfo="Visit the best zoo in the world located in Puerto de La Cruz for orca and dolphin shows, gorillas, and a whole host of other animals."
                        link="https://www.loroparque.com/en/"
                        img={loroParque}
                        />
                    </section>

                    <section id="urban">
                        <h2 className={styles.sectionTitle}>Shopping & Urban Life</h2>
                        <hr className={styles.sectionBreak} />
                    </section>
                </div>

        </div>
    </>
  )
}

export default TravelTips;