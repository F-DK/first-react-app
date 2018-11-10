import React from 'react'
import './card.css'

const Card = props => (
  <div className="card">
    <img src={props.image} className="card__image"/>
    <h3 className="card__title">{props.title}</h3>
    <p className="card__text">{props.text}</p>
  </div>
)

export default Card