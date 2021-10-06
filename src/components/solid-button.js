import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './solid-button.module.css'

const SolidButton = (props) => {
  return (
    <div className={styles['container']}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['button']} `}
      >
        {props.REZERVA}
      </button>
    </div>
  )
}

SolidButton.defaultProps = {
  REZERVA: 'RESERVE NOW',
}

SolidButton.propTypes = {
  REZERVA: PropTypes.string,
}

export default SolidButton
