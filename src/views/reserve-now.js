import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import projectStyles from '../style.module.css'
import styles from './reserve-now.module.css'

const ReserveNow = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Reserve Now - GG Production</title>
        <meta property="og:title" content="Reserve Now - GG Production " />
      </Helmet>
      <div className={styles['Top-container']}>
        <nav className={styles['Navbar']}>
          <div className={styles['container1']}>
            <Link to="/" className={styles['navlink']}>
              <img
                alt="image"
                src="/playground_assets/watermark%20-%20long%20-%20center%20-%20white-1000h.png"
                className={` ${styles['image']} ${projectStyles['thqLink']} `}
              />
            </Link>
          </div>
          <div className={styles['Links-container']}>
            <Link
              to="/"
              className={` ${styles['navlink1']} ${projectStyles['thqLink']} `}
            >
              HOME
            </Link>
            <span className={styles['text']}>WEDDING</span>
            <Link
              to="/cinema"
              className={` ${styles['navlink2']} ${projectStyles['thqLink']} `}
            >
              CINEMA
            </Link>
            <Link
              to="/prices"
              className={` ${styles['navlink3']} ${projectStyles['thqLink']} `}
            >
              PRICING
            </Link>
            <span className={styles['text1']}>CONTACT</span>
          </div>
          <div className={styles['Right-side']}>
            <img
              alt="image"
              src="/playground_assets/ggtv_logo%20white-1000h.png"
              className={styles['image1']}
            />
            <a href="#main-section" className={styles['link']}>
              <SolidButton
                REZERVA="RESERVE NOW"
                className={projectStyles['thqLink']}
              ></SolidButton>
            </a>
          </div>
        </nav>
        <h1 className={styles['text2']}>RESERVE NOW</h1>
      </div>
      <div className={styles['container2']}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdnlS7bwaWtPPoC1UhnxfSG5vp_-KibfqDTSkk-Jjv9r_FqPw/viewform?embedded=true"
          className={styles['iframe']}
        ></iframe>
      </div>
    </div>
  )
}

export default ReserveNow
