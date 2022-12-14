import React from 'react'
import WishListCard from '../components/WishList'
import { useProduct } from '../context/ProductProvider'

export default function WishList() {

    const { state: {wishlist} } = useProduct()
    console.log(wishlist)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {wishlist.map(product => <WishListCard key={product._id} product={product}/>)}
        </div>
    )
}
