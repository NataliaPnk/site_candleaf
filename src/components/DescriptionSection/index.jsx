import React from 'react'
import s from './index.module.css'
import image from './media/right_site_image.svg'
import check from './media/check.png'

export default function DescriptionSection() {

  return (
    <div className={s.descriptionSectionContainer}>

      <div className={s.leftSide}>
        <h2>Clean and <br/> fragrant soy wax</h2>
        <p>Made for your home and for your wellness</p>
        <ul> <img src={check}/> <strong>Eco-sustainable:</strong> All recyclable materials, 0% CO2 emissions</ul>
        <ul> <img src={check}/> <strong> Hyphoallergenic: </strong> 100% natural, human friendly ingredients </ul>
        <ul> <img src={check}/> <strong>Handmade:</strong> All candles are craftly made with love.</ul>
        <ul> <img src={check}/> <strong>Long burning:</strong> No more waste. Created for last long.</ul>
        <button>Learn more</button>
      </div>


      <div className={s.rightSide}>
          <img src={image}/>
      </div>

      
      </div>
  )
}
