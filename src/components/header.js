import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 48) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'header header-scrolled' : 'header'}>
        <div className="header-nav">
          <Link className="nav__link" to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link className="nav__link" to="/courses">Courses</Link>
          <Link className="nav__link" to="/downloads">Downloads</Link>
          <Link className="nav__link" to="/workshops">Workshops</Link>
          <Link className="nav__link" to="/buy"><button className="link__button">Buy</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
