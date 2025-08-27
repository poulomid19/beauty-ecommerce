import { Link } from 'react-router-dom'
import collection from './newcollection'
const Collection = () => {
  return (
    <>
     <section className="body-font py-10 px-10 pb-20 bg-pink-50">
       <h3 className='text-4xl font-bold text-center'>New Collections</h3>
       <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-teal-700 inline-flex"></div>
      </div>
    <div className="flex flex-wrap mt-10">
        {collection.map((e)=>{
            return (
            <div className="px-2 w-1/2">
        <div className="flex flex-wrap w-full h-[50vh] sm:py-24 py-16 sm:px-10 px-6 relative">
          <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 opacity-70" src= {e.image} />
          <div className="relative z-10 w-full right-0 text-right">
            <h2 className="text-3xl text-gray-700 font-bold mb-2">{e.name1}</h2>
            <h2 className="text-3xl text-gray-700 font-bold mb-2">{e.name2}</h2>
            <h2 className="text-3xl text-gray-700 font-bold mb-2">{e.name3}</h2>
            <p className="text-xl text-gray-700 font-bold mb-2">{e.title}</p>
            <Link><button className='bg-black  text-white border-2 py-1 px-3 focus:outline-none hover:text-black hover:bg-white transition duration-500 rounded mt-5 font-bold text-xl' to="/">SHOP</button>
            </Link>
          </div>
        </div>
      </div>
            )
        })}
    </div>
  </section>

    </>
  )
}

export default Collection