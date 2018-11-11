import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';
import Section from '../components/section';
import Wave from '../components/wave';

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="hero-group">
        <h1 className="hero-group__title">
          Learn to <br />
          design and code React apps
        </h1>
        <p className="hero-group__intro-text">
          Just playing around and learning hopefully a lot and while doing that &mdash; becoming a better designer.
        </p>
        <Link className="hero-group__link" to="/page-2/">
          Watch the video
        </Link>
        <div className="hero-group__logos">
          <img src={require('../images/logo-sketch.png')} width="48" />
          <img src={require('../images/logo-figma.png')} width="48" />
          <img src={require('../images/logo-studio.png')} width="48" />
          <img src={require('../images/logo-framer.png')} width="48" />
          <img src={require('../images/logo-react.png')} width="48" />
          <img src={require('../images/logo-swift.png')} width="48" />
        </div>
      </div>
      <Wave />
    </div>
    <div className="cards">
      <h2>
        11 courses, more coming
      </h2>
      <div className="card-group">
        <Card
          title="React for designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="Design and code in FramerX"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="Design system in Figma"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="Build an ARKit 2 app"
          text="12 sections"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </div>
)

export default IndexPage
