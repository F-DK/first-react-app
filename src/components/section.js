import React from 'react'
import styled from 'styled-components'
import Wave from './wave';

const SectionGroup = styled.div`
  position: relative;
  background: url(${props => props.image});
  background-size: cover;
  height: 820px;
  width: 100%;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 24px;

  @media (min-width: 641px) {
    height: 720px;
  }
`
const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`
const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 32px;
  grid-gap: 24px;
  grid-template-rows: auto 100%;

  @media (min-width: 721px) {
    grid-template-columns: 288px auto;
  }
`
const SectionTitle = styled.h3`
  margin: 0;
  color: #fff;
  font-size: 40px;
  line-height: 1.2;

  @media (min-width: 721px) {
    font-size: 56px;
  }
`
const SectionText = styled.p`
  color: #fff;
`
const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -8px;
`
const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -8px;
  transform: rotate(180deg);
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveBottom><Wave /></WaveBottom>
    <SectionLogo src={props.logo} />
    <SectionContent>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionContent>
    <WaveTop><Wave /></WaveTop>
  </SectionGroup>
)

export default Section