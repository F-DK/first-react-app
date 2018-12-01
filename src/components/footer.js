import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
  background: #F1F3F5;
  padding: 48px 0;
  display: grid;
`
const Text = styled.p`
  max-width: calc(100% - 48px);
  margin: 48px 24px;
  text-align: center;
  fontsize: 20px;
  font-weight: 600;
  color: #486791;

  @media (min-width: 641px) {
    max-width: 800px;
    margin: 0 auto;
    padding: 48px 0;
  }
`
const Button = styled.button`
  padding: 12px 36px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: 0;
  background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 21px;
  justify-self: center;

  @media (min-width: 641px) {
    padding: 16px 48px;
    font-size: 20px;
  }
`
const LinkGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 12px;
  margin: 48px auto 64px auto;
  min-width: 96px;
  max-width: 160px;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    color: #5334F5;
  }

  @media (min-width: 641px) {
    margin: 48px auto;
  }
`
const Copyright = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 400px;
  color: #486791;
  font-size: 14px;
  font-weight: 400;

  a {
    ${'' /* text-decoration: none; */}
    font-weight: 600;
  }

  @media (min-width: 641px) {
    max-width: 500px;
  }
`

const Footer = ({data, children}) => (
  <FooterGroup>
    <Text>
      Tweet
    </Text>
    <Button>
      Tweet
    </Button>
    <LinkGroup>
      {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}
    </LinkGroup>
    <Copyright>
      {children}
    </Copyright>
  </FooterGroup>
)

export default Footer