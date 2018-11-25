import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 48px auto;
  grid-gap: 16px;
  align-items: center;

  @media (min-width: 641px) {
    grid-gap: 24px;
  }
`
const CellImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: url(${props => props.image}) center center no-repeat, black;
  background-size: 40px, contain;

  @media (min-width: 641px) {
    width: 56px;
    height: 56px;
  }
`
const CellTitle = styled.div`
  font-size: 20px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: 20px 0;
`

const Cell = props => (
  <CellGroup>
    <CellImage image={props.image}></CellImage>
    <CellTitle>{props.title}</CellTitle>
  </CellGroup>
)

export default Cell