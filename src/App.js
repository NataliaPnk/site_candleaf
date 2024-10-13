
import { useState } from 'react';
import './App.css';
import DescriptionSection from './components/DescriptionSection';
import Header from './components/Header';
import PhotoPresentationSection from './components/PhotoPresentationSection';
import PopularProductsSection from './components/PopularProductsSection';
import ProductSection from './components/ProductsSection';
import TestimonialsSection from './components/TestimonialsSection';

import { cards as initialCards } from './data/cards'
import Footer from './components/Footer';



function App() {

  const [ cards, setCards ] = useState(initialCards)

 

  return (
    <div>
      <Header/>
      <PhotoPresentationSection/>
      <ProductSection/>
      <DescriptionSection/>
      <TestimonialsSection/>
      <PopularProductsSection cards={cards}/>
      <Footer/>
    </div>
  );
}

export default App;
