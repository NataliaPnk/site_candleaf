import PopularItem from '../PopularItem'
import s from '../PopularProductsSection/index.module.css'

export default function PopularProductsSection({cards}) {


  return (
    <div className={s.popularProductsWrapper}>

      <div className={s.titleWrapper}>
        <h2>Popular</h2>
        <p>Our top selling product that you may like</p>
      </div>

      <div className={s.itemsWrapper}>
     {
        cards.map(el => <PopularItem key={el.id} {...el} />)
     }
     </div>
     
      </div>
  )
}
