import React from 'react'
import s from './index.module.css'

export default function ItenRewiew({photo, rates, review, name}) {

  return (
    <div className={s.itemReview}>
      <img src={photo}/>
      <img className={s.rates} src={rates}/>
      <p>{review}</p>
      <span>{name}</span>
      </div>
  )
}
