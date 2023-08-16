/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
// import { Nav } from 'react-bootstrap'
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const isToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={isToggle} />
      <Sidebar isOpen={isOpen} toggle={isToggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
