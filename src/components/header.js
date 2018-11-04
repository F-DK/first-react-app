import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header-nav">
    <Link className="nav__link" to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
    <Link className="nav__link" to="/courses">Courses</Link>
    <Link className="nav__link" to="/downloads">Downloads</Link>
    <Link className="nav__link" to="/workshops">Workshops</Link>
    <Link className="nav__link" to="/buy"><button className="link__button">Buy</button></Link>
    </div>
  </div>
)

export default Header
