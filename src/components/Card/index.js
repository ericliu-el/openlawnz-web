import React from 'react'
import cn from 'classnames'

import styles from './card.module.scss'

const CardSmall = ({ title = "", imgSrc = "", className }) => {
  return (
    <div className={cn(styles.card, styles.small, className)}>
      <img src={imgSrc} width="192" alt={title} />
      <h3>{title}</h3>
    </div>
  )
};

const CardMedium = ({ title = "", content = "", imgSrc = "", className }) => {
  return (
    <div className={cn(styles.card, styles.medium, className)}>
      <img src={imgSrc} width="192" alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
};

const CardLarge = ({ title = "", content = "", imgSrc = "", className }) => {
  return (
    <div className={cn(styles.card, styles.large, className)}>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <img src={imgSrc} width="192" alt={title} />
    </div>
  )
};

const CardAvatar = ({ title = "", content = "", imgSrc = "", className }) => {
  return (
    <div className={cn(styles.card, styles.avatar, className)}>
      <img src={imgSrc} width="192" alt={title} />
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  )
};

const Card = () => null;

Card.Small = CardSmall;
Card.Medium = CardMedium;
Card.Large = CardLarge;
Card.Avatar = CardAvatar;

export default Card;