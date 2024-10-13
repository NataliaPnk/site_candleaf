import React from 'react'
import a from './index.module.css'
import iconPlant from './media/hero-title.png'


export default function PhotoPresentationSection() {

  return (
    <div className={a.PhotoPresentationSectionContainer}>
   

    <div className={a.contentInCentreWrapper}>
      <img src={iconPlant}/>
      <h2>The nature candle</h2>
      <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
      <button>Discovery our collection</button>
    </div>


      </div>
  )
}
