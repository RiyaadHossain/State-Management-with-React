import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";

const TopRated = () => {

  const { state: {products} } = useProduct()
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {products.filter(product => product.rating >= 4).map(product => <ProductCard product={product} />)}
    </div>
  );
};

export default TopRated;
