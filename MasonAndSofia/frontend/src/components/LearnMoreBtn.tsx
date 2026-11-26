import styles from '../styles/LearnMoreBtn.module.css';

interface btnProps {
    link: string
}

const LearnMoreBtn = ({link} : btnProps) => {
  return (
    <a href={link} className={styles.click}>
        <div className={styles.btn}>
                Learn more →
        </div>
    </a>  
  )
}

export default LearnMoreBtn