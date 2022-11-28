import React from "react";
import { useProduct } from "../context/ProductProvider";
import { productAction } from "../state/ProductState/productAction";

const WishListCard = ({ product }) => {

  const { dispatch } = useProduct()

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature, i) => {
            return <li key={i} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        <button className='bg-red-600 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={() => dispatch({ type: productAction.REMOVE_FROM_WISHLIST, payload: product })}>
          Remove From WishList
        </button>
      </div>
    </div>
  );
};

export default WishListCard;
