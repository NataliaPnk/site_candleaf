import React from 'react'
import s from './index.module.css'

export default function ProductItem({image, title, price}) {

  return (
    <div className={s.productCard}>
      <img src={image}/>
      <p>{title}</p>
      <span>{price}$</span>
      </div>
  )
}
