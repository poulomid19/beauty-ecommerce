import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = ({title, subtitle, items}) => {
    const navigate = useNavigate()
    const clickHandler = (id)=>{
        navigate(`/products/${id}`)
    }
  return (
    <>
      <section className='bg-pink-50 py-20'>
         <h2 className="text-3xl text-gray-900 font-bold title-font mb-8 pl-10">{title}</h2>
         <p className='font-medium text-base mb-10 pl-10'>{subtitle}</p>
         <div className="flex gap-4 justify-center mx-10 mt-10">
         {items.map((i)=>(
       <div className="lg:w-1/4 md:w-1/2" key={i.id}>
    <a className="block relative h-96 rounded overflow-hidden">
      <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110 transition duration-300 cursor-zoom-in" src={i.image} />
    </a>
    <div className="mt-4">
      <h2 className="text-gray-900 title-font text-lg font-medium cursor-pointer" onClick={()=>clickHandler(i.id)}>{i.name}</h2>
      <h3 className="text-sm font-semibold tracking-widest text-lime-700 mb-1">{i.price}</h3>
    </div>
       </div>
       ))}
       </div>
       </section>
    </>
  )
}

export default Category