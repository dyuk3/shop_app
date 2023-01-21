import React from 'react';
import './productCard.css';

const ProductCard = (props) => {
  return (
    <div className='prod-Card'>
      <div className="prod__img-container">
        <img className='prod-img' src={props.image} alt="" />
      </div>
      <div className='prod-name'> {props.title}</div>
    </div>
  );
};

export default ProductCard;