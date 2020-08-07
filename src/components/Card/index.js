import React from 'react'

import CardPic from '../../images/repossession.png'
import styles from './card.module.scss'

const CardSmall = ({ title = "" }) => {
  return (
    <div className={`${styles.card} ${styles.small}`}>
      <img src={CardPic} width="192" alt={title} />
      <h3>{title}</h3>
    </div>
  )
};

const CardMedium = ({ title = "", content = "", img = "" }) => {
  return (
    <div className={`${styles.card} ${styles.medium}`}>
      <img src={CardPic} width="192" alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
};

const CardLarge = ({ title = "", content = "", img = "" }) => {
  return (
    <div className={`${styles.card} ${styles.large}`}>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <img src={CardPic} width="192" alt={title} />
    </div>
  )
};

const Card = () => null;

Card.Small = CardSmall;
Card.Medium = CardMedium;
Card.Large = CardLarge;

export default Card;