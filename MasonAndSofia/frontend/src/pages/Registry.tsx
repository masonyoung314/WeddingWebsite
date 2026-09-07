import styles from '../styles/Registry.module.css';
import NavBar from '../components/NavBar';
import AmazonCards from '../components/AmazonCards';
import sheets from '../assets/purpleSheets.png';

type Props = {}

function Registry({}: Props) {
  return (
    <>
      <div className={styles.registryPage}>
        <NavBar />
        <div className={styles.registryBelowNav}>
          <h1>Registry</h1>
          <div className={styles.registryCards}>
            <AmazonCards amazonLink='https://amzn.to/4r7y4vh' picture={sheets} />
          </div>
          <div className={styles.footer}>As an Amazon Affiliate, I earn from qualifying purchases.</div>
        </div>
      </div>
    </>
  )
}

export default Registry;