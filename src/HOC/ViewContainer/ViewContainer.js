import React from 'react'
import PropTypes from 'prop-types'
import style from './ViewContainer.module.scss'

const ViewContainer = ({ children }) => { 
  return <div className={style.view_container}>{children}</div>
}

ViewContainer.propTypes = {
  children: PropTypes.any,
}

export default ViewContainer
