import React from "react";
import s from "./index.module.css";
import ProductItem from "../ProductItem";

import SpicedMintImg01 from './media/SpicedMintImg01.svg'
import SweetStraweberryImg02 from './media/SweetStraweberryImg02.svg'
import CoolBlueberriesImg03 from './media/CoolBlueberriesImg03.svg'
import JuicyLemonImg04 from './media/JuicyLemonImg04.svg'
import ProductNameImg05 from './media/ProductNameImg05.svg'
import FragrantCinnamonImg06 from './media/FragrantCinnamonImg06.svg'
import SummerCherriesImg07 from './media/SummerCherriesImg07.svg'
import CleanLavanderImg08 from './media/CleanLavanderImg08.svg'



export default function ProductSection() {
  return (
    <div className={s.productSectionContainer}>

      <div className={s.title_content}>
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones </p>
      </div>

      <div className={s.product_items}>
      <ProductItem image={SpicedMintImg01} title={'Spiced Mint'} price={9.99}/>
      <ProductItem image={SweetStraweberryImg02} title={'Sweet Straweberry'} price={9.99}/>
      <ProductItem image={CoolBlueberriesImg03} title={'Cool Blueberries'} price={9.99}/>
      <ProductItem image={JuicyLemonImg04} title={'Juicy Lemon'} price={9.99}/>
      <ProductItem image={ProductNameImg05} title={'Product name'} price={9.99}/>
      <ProductItem image={FragrantCinnamonImg06} title={'Fragrant Cinnamon'} price={9.99}/>
      <ProductItem image={SummerCherriesImg07} title={'Summer Cherries'} price={9.99}/>
      <ProductItem image={CleanLavanderImg08} title={'Clean Lavander'} price={9.99}/>
      </div>

    </div>
  );
}
