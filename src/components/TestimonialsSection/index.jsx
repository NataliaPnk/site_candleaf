
import React from 'react'
import s from './index.module.css'
import ItemRewiew from '../ItemRewiew'

import review01 from './media/review01.png'
import review02 from './media/review02.png'
import review03 from './media/review03.png'

import rates01 from './media/rates01.png'
import rates02 from './media/rates02.png'
import rates03 from './media/rates03.png'

export default function TestimonialsSection() {

  return (
    <div className={s.TestimonialsSectionContainer}>

      <div className={s.titleContent}>
        <h2>Testimonials</h2>
        <p>Some quotes from our happy customers</p>
      </div>



      <div className={s.itemsReviewWrapper}>
          <ItemRewiew photo={review01} rates={rates01} review={`“I love it! No more air
            fresheners”`} name={'Luisa'}/>
          <ItemRewiew photo={review02} rates={rates02} review={`“Raccomended for
             everyone”`} name={'Edoardo'}/>
          <ItemRewiew photo={review03} rates={rates03} review={`“Looks very natural, the
             smell is awesome”`} name={'Mart'}/>
      </div>

      </div>
  )
}
