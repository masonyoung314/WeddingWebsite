import React from 'react'
import styles from '../styles/Registry.module.css';

type Props = {}

function Registry({}: Props) {
  return (
    <>
      <div className={styles.registryPage}>
        Registry
        <div className={styles.footer}>As an Amazon Affiliate, I earn from qualifying purchases.</div>
      </div>
    </>
  )
}

export default Registry;