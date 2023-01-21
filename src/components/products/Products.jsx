import React, { useEffect } from 'react';
import { useState } from 'react';
import ProductCarousel from '../productCarousel/ProductCarousel';
import './products.css';


const Products = () => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const getAllProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const prodData = await response.json();
        setData(prodData);
      } catch (error) {
        console.log('There was an error', error);
        setData(false);
      }

      // const response = await fetch('https://fakestoreapi.com/products');
      // await fetch('https://fakestoreapi.com/products')
      //   .then(response => { return response.json(); })
      //   .then(jsonResponse => setData(jsonResponse))
      //   .catch((error) => {
      //     console.log(error);
      //   });
      setLoading(false);
    };

    getAllProducts();

  }, []);

  const Loading = () => {
    return (
      <>
        Loading....
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {data ? <ProductCarousel products={data} /> : <div>There has been issue, Please check console. </div>}
      </>

    );
  };


  return (
    <div className='shopping__products section-margin'>
      <h1>Available Products</h1>
      <div>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;