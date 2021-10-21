import type { NextPage } from 'next'
import React from 'react'
import { withLayout } from '../Layout/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Главная</h1>
      </div>
    </>
  )
}

export default withLayout(Home);
