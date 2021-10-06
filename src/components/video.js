import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import styles from './video.module.css'

const Video = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <span className={styles['text']}>{props.titlu}</span>
        <OutlineButton ACCESEAZA="PLAY NOW"></OutlineButton>
      </div>
    </div>
  )
}

Video.defaultProps = {
  titlu: 'City Name',
  rootClassName: '',
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt: 'image',
}

Video.propTypes = {
  titlu: PropTypes.string,
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Video
