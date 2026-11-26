import LearnMoreBtn from "./LearnMoreBtn";
import styles from '../styles/TravelPlacesTiles.module.css';

interface tileProps {
    configuration: number,
    sectionSubTitle: string,
    sectionSubInfo: string,
    img: string,
    link: string
}

const TravelPlacesTiles = ({configuration, sectionSubTitle, sectionSubInfo, img, link} : tileProps) => {
  return (
    <>
        <div className={styles.placeSubSection}>
            {configuration === 1 && <img src={img} className={styles.subSectionImg} />}
            <div className={styles.placeSubSectionInfo}>
                <h2 className={styles.sectionSubTitle} style={{paddingBottom: "1rem"}}>{sectionSubTitle}</h2>
                <p className={styles.sectionSubInfo}>{sectionSubInfo}</p>
                <LearnMoreBtn link={link}/>
            </div>
            {configuration === 2 && <img src={img} className={styles.subSectionImg} />}
        </div>

        <hr className={styles.sectionBreak} />
    </>
    
  )
}

export default TravelPlacesTiles;