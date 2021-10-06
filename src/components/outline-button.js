import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-button.module.css'

const OutlineButton = (props) => {
  return (
    <div className={styles['container']}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['button']} `}
      >
        {props.ACCESEAZA}
      </button>
    </div>
  )
}

OutlineButton.defaultProps = {
  ACCESEAZA: 'ACCESS',
}

OutlineButton.propTypes = {
  ACCESEAZA: PropTypes.string,
}

export default OutlineButton
