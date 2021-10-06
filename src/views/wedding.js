import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import projectStyles from '../style.module.css'
import styles from './wedding.module.css'

const Wedding = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Wedding - GG Production</title>
        <meta property="og:title" content="Wedding - GG Production " />
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
            <Link to="/reserve-now" className={styles['navlink4']}>
              <SolidButton
                REZERVA="RESERVE NOW"
                className={` ${styles['component']} ${projectStyles['thqLink']} `}
              ></SolidButton>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Wedding
