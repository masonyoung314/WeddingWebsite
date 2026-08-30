import styles from '../styles/Registry.module.css';
import NavBar from '../components/NavBar';

type Props = {}

function Registry({}: Props) {
  return (
    <>
      <div className={styles.registryPage}>
        <NavBar />
        Registry
        <div className={styles.footer}>As an Amazon Affiliate, I earn from qualifying purchases.</div>
      </div>
    </>
  )
}

export default Registry;