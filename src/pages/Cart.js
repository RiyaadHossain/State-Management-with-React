import React from "react";
import CartCard from "../components/CartCard";
import { useProduct } from "../context/ProductProvider";

const Cart = () => {

  const { state: { carts } } = useProduct()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {carts.map(product => <CartCard key={product._id} product={product} />)}
    </div>
  );
};

export default Cart;
