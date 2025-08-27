import { useNavigate } from 'react-router-dom'
const Popular = ({value}) => {
  const navigate = useNavigate()
  const clickHandler =()=>{
     navigate(`/products/${value.id}`)
  }
  return (
    <>
  <div className="lg:w-1/4 md:w-1/2" onClick={clickHandler}>
    <a className="block relative h-64 rounded overflow-hidden">
      <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110 transition duration-300 cursor-zoom-in" src={value.image} />
    </a>
    <div className="mt-4">
      <h2 className="text-gray-900 title-font text-lg font-medium">{value.name}</h2>
      <h3 className="text-sm font-semibold tracking-widest text-lime-700 mb-1">{value.price}</h3>
      <button className='bg-lime-700  text-white border-2 border-lime-700 py-1 px-3 focus:outline-none hover:text-lime-700 hover:bg-white transition duration-500 rounded mt-5 font-bold text-xl'>Add to cart</button>
    </div>
       </div>  
    </>
  )
}

export default Popular