import React from 'react'
import s from '../Footer/index.module.css'
import firmIcon from './media/firmIcon.svg'

export default function Footer() {

  return (
    <div className={s.footerContainer}>

        <div className={s.line}></div>

      <div className={s.wrapperIconText}> 
        <img src={firmIcon}/>
        <p>Your natural candle made for <br/> your home and for your wellness.</p>
      </div> 

      <div className={s.containerColons}>
      <div className={s.wrapperColon}>
        <h5>Discovery</h5>
        <p>New season</p>
        <p>Most searched</p>
        <p>Most selled</p>
      </div>

      <div className={s.wrapperColon}>
      <h5>About</h5>
        <p>Help</p>
        <p>Shipping</p>
        <p>Affiliate</p>
      </div>

      <div className={s.wrapperColon}>
      <h5>Info</h5>
        <p>Contact us</p>
        <p>Privacy Policies</p>
        <p>Terms & Conditions</p>
      </div>
      </div>


      </div>
  )
}
