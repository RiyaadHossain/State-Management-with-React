import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";

const Home = () => {

  const { state: { fetching, error, products } } = useProduct();
  let context;

  if (fetching) {
    context = <p>Loading...</p>
  }

  if (error) {
    context = <p>Something went wrong</p>
  }

  if (products.length >= 1) {
    context = products.map(product => <ProductCard key={product._id} product={product} />)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {context}
    </div>
  );
};

export default Home;
