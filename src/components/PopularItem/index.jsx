import React from 'react'
import s from '../PopularItem/index.module.css'

export default function PopularItem({id, title, price, image}) {

  return (
    <div className={s.popularItem}>
      <img src={image}/>
      <p>{title}</p>
      <span>{price}</span>
      </div>
  )
}
