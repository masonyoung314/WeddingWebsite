import styles from '../styles/Information.module.css';
import NavBar from '../components/NavBar';

const Information = () => {
  return (
    <>
      <div className={styles.infoPage}>
        <NavBar />
        <h2 className={styles.arriveTitle}>How to Arrive</h2>
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
        <p>Put dress code, colors that combine nicely, and outfit examples</p>

      </div>
    </>
  )
}

export default Information;