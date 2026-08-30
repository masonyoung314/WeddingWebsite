import Countdown from '../components/Countdown';
import styles from '../styles/index.module.css';
// import one from '../assets/saveTheDate1.png';
// import two from '../assets/saveTheDate2.png';
// import both from '../assets/MasonAndSofiaEngagementForWeb.jpg';
import NavBar from '../components/NavBar';

type Props = {}

// const imageOne = document.getElementById("imgOne");
// const imageTwo = document.getElementById("imgTwo");

// imageOne?.addEventListener('mousemove', (e:MouseEvent) => {
//   const rectangle = imageOne.getBoundingClientRect();

//   const x = e.clientX - rectangle.left;
//   const y = e.clientY - rectangle.top;



// });


function Home({}: Props) {
  return (
    <>
      <div className={styles.homePage}>
        <NavBar />
        <Countdown />
        <div className={styles.images}>
          {/* <img className={styles.saveDate1} src={one} id="imgOne"/>
          <img className={styles.saveDate2} src={two} id="imgTwo"/> */}
        </div>
      </div>
    </>
  )
}

export default Home;