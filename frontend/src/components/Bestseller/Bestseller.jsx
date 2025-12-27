import React from 'react'
import best from '../Bestseller/best'
import { useNavigate } from 'react-router-dom'
const Bestseller = () => {
  const navigate = useNavigate()
  const clickHandler = (id)=>{
    navigate(`/products/${id}`)
  }
  return (
    <>
      <section className="text-gray-600 body-font bg-pink-50">
  <div className="containers py-20 mx-auto flex flex-wrap px-40">
    <h2 className="text-3xl text-gray-900 font-bold title-font text-center mb-10">Best Selling</h2>
     <div className="flex gap-4">
          <div className="flex flex-wrap w-1/2">
        <div className="relative w-full h-[50vh] overflow-hidden group cursor-pointer" onClick={() => clickHandler(best[0].id)}>
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={best[0].image} />
           <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center px-4 py-3">
          <h2 className="text-lg font-medium truncate">{best[0].name}</h2>
         <button className="mt-2 px-3 py-1 bg-black/80 rounded font-semibold text-sm hover:bg-black transition duration-300">  Add to cart
      </button>
       </div>
           </div>

  
            <div className="relative w-1/2 h-[50vh] overflow-hidden group cursor-pointer" onClick={() => clickHandler(best[1].id)}>
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={best[1].image} />
           <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center px-4 py-3">
          <h2 className="text-lg font-medium truncate">{best[1].name}</h2>
         <button className="mt-2 px-3 py-1 bg-black/80 rounded font-semibold text-sm hover:bg-black transition duration-300">  Add to cart
      </button>
       </div>
           </div>


            <div className="relative w-1/2 h-[50vh] overflow-hidden group cursor-pointer" onClick={() => clickHandler(best[2].id)}>
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={best[2].image} />
           <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center px-4 py-3">
          <h2 className="text-lg font-medium truncate">{best[2].name}</h2>
         <button className="mt-2 px-3 py-1 bg-black/80 rounded font-semibold text-sm hover:bg-black transition duration-300">  Add to cart
         </button>
            </div>
               </div>
               </div>

    <div className="flex flex-wrap w-1/2">
        <div className="relative w-1/2 h-[50vh] overflow-hidden group cursor-pointer" onClick={() => clickHandler(best[3].id)}>
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={best[3].image} />
           <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center px-4 py-3">
          <h2 className="text-lg font-medium truncate">{best[3].name}</h2>
         <button className="mt-2 px-3 py-1 bg-black/80 rounded font-semibold text-sm hover:bg-black transition duration-300">  Add to cart
      </button>
       </div>
           </div>

  
            <div className="relative w-1/2 h-[50vh] overflow-hidden group cursor-pointer" onClick={() => clickHandler(best[4].id)}>
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={best[4].image} />
           <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center px-4 py-3">
          <h2 className="text-lg font-medium truncate">{best[4].name}</h2>
         <button className="mt-2 px-3 py-1 bg-black/80 rounded font-semibold text-sm hover:bg-black transition duration-300">  Add to cart
      </button>
       </div>
           </div>


            <div className="relative w-full h-[50vh] overflow-hidden group cursor-pointer" onClick={() => clickHandler(best[5].id)}>
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={best[5].image} />
           <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center px-4 py-3">
          <h2 className="text-lg font-medium truncate">{best[5].name}</h2>
         <button className="mt-2 px-3 py-1 bg-black/80 rounded font-semibold text-sm hover:bg-black transition duration-300">  Add to cart
         </button>
            </div>
               </div>
    </div>
  </div>
  </div>
</section>

    </>
  )
}

export default Bestseller