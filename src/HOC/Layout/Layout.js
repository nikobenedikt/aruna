import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import PropTypes from 'prop-types'
import ViewContainer from '../ViewContainer/ViewContainer'
const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <ViewContainer>{children}</ViewContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
