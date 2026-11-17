import styles from '../styles/Information.module.css';
import NavBar from '../components/NavBar';
import pinterest from '../assets/Pinterest.svg';
import outfitOne from '../assets/Outfit1.png';
import outfitTwo from '../assets/Outfit2.png';
import outfitThree from '../assets/Outfit3.png';

const Information = () => {
  return (
    <>
      <div className={styles.infoPage}>
        <NavBar />
        <h1 className={styles.arriveTitle}>How to Arrive</h1>
        <p style={{color: "#542D3B"}}> We can't wait to celebrate with you! </p>
        <div className={styles.locationDiv}>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4552.918978638867!2d-16.520975123589572!3d28.368386275810025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc402b7fc9fd967f%3A0xeb98c26fed1166af!2sLa%20Golosa%20Business%20and%20Leisure!5e1!3m2!1sen!2sus!4v1790610053113!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin" 
          />
        </div>
        <p className={styles.address}>Lugar los Perdigones, 38310 La Orotava, Santa Cruz de Tenerife, Spain</p>

        <hr className={styles.divider}/>

        <div className={styles.dressInfoDiv}> 
          <h1 className={styles.dressCode}>Dress Code</h1>
          <h3 className={styles.elegantText} style={{color: "#8C113D", paddingBottom: "1rem"}}><i>Elegant & Colorful</i></h3>
          <div className={styles.imagesDiv}>
            <img className={styles.imageOne} src={outfitOne} style={{width: "400px", height: "700px", borderRadius:"1rem"}} />
            <img className={styles.imageTwo} src={outfitTwo} style={{width: "400px", height: "700px", borderRadius:"1rem"}} />
            <img className={styles.imageThree} src={outfitThree} style={{width: "400px", height: "700px", borderRadius:"1rem"}} />
          </div>
        </div>
        <p className={styles.longDressesText} style={{color: "#542D3B", paddingBottom: "1rem"}}>Long dresses and vibrant colors are encouraged! </p>
        
        <div className={styles.pinSection}>
          <p className={styles.visitPin}>* Please visit our Pinterest by clicking on the logo below for more outfit inspiration</p>
          <a href="https://pin.it/1ANYAhN30">
            <img className={styles.pin} src={pinterest} width="100" height="100"/>
          </a>
        </div>
        

      </div>
    </>
  )
}

export default Information;