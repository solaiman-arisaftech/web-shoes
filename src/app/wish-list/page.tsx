import React from 'react'
import WishListCard from './wishListCard'

const page = () => {
  return (
    <section
      className="w-full flex flex-col py-36 px-4 md:px-16 lg:px-32 xl:px-64 gap-8 bg-white "
      id="products"
    >
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-10">
        Wishlist Products
      </div>
      <WishListCard/>
      <WishListCard/>
      <WishListCard/>
      <WishListCard/>
      <WishListCard/>
      <WishListCard/>
      

      
    </section>
  )
}

export default page