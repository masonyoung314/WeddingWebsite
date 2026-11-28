import styles from '../styles/Registry.module.css';
import NavBar from '../components/NavBar';
import AmazonCards from '../components/AmazonCards';
import sheets from '../assets/purpleSheets.png';
import oven from '../assets/smartOven.png';
import creami from '../assets/creami.png';
import printer from '../assets/printer.png';
import airFryer from '../assets/airFryer.png';
import blender from '../assets/blender.png';

type Props = {}

function Registry({}: Props) {
  return (
    <>
      <div className={styles.registryPage}>
        <NavBar />
        <div className={styles.registryBelowNav}>
          <h1 style={{color: "#542D3B"}}>Registry</h1>
          <div className={styles.registryCards}>
            <AmazonCards amazonLink='https://amzn.to/4r7y4vh' picture={sheets} />
            <AmazonCards amazonLink='https://amzn.to/4ypwxTB' picture={oven} />
            <AmazonCards amazonLink='https://amzn.to/46vjq7P' picture={creami} />
            <AmazonCards amazonLink='https://link.amazon/B03iCa2Us' picture={printer} />
            <AmazonCards amazonLink='https://link.amazon/B07wKcUQi' picture={airFryer} />
            <AmazonCards amazonLink='https://link.amazon/B0gEDeUcs' picture={blender} />
          </div>
          <div className={styles.footer} style={{color: "#542D3B"}}>As an Amazon Affiliate, I earn from qualifying purchases.</div>
        </div>
      </div>
    </>
  )
}

export default Registry;