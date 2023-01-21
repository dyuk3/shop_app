import './productCarousel.css';

import ProductCard from '../productCard/ProductCard';
import { useRef } from 'react';

const ProductCarousel = ({ products }) => {

  const ref = useRef();



  const prevPress = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft -= width;
  };

  const nextPress = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft += width;
  };
  return (
    <div className='shopping__product-carousel' >
      <button className='prev-btn'><p onClick={prevPress}>&lt;</p></button>
      <button className='next-btn' ><p onClick={nextPress}>&gt;</p></button>

      <div className="shopping__product-container" ref={ref}>
        {products.map((product, index) => (

          <ProductCard key={index} {...product} />
        ))}

      </div>


    </div>
  );
};

export default ProductCarousel;