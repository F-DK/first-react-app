import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="hero-group">
        <h1 className="hero-group__title">Learn to <br />design and code React apps</h1>
        <p className="hero-group__intro-text">Just playing around and learning hopefully a lot and while doing that &mdash; becoming a better designer.</p>
        <Link className="hero-group__link" to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
