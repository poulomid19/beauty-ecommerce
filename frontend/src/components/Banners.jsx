import { Link } from 'react-router-dom'
const banner = ({info,img}) => {
  return (
    <>
       <section className="body-font bg-yellow-50">
            <div className="flex flex-wrap mx-5">
        <div className="flex flex-wrap w-full h-[70vh] sm:py-24 py-16 sm:px-10 px-6 relative bg-fixed bg-center bg-cover items-center justify-center" style={{backgroundImage: `url(${img})`}}>
           {info.map((i)=>(
                <div className="relative z-10 w-full right-0 text-center" key={i.id}>
            <h2 className="text-md font-medium mb-5">{i.title}</h2>
            <h2 className="text-2xl title-font font-bold text-gray-900 mb-2">{i.name}</h2>
            <h2 className="text-2xl title-font font-bold text-gray-900 mb-8">{i.subtitle}</h2>
            <Link to="/"className='bg-black text-white border-2 py-2 px-3 focus:outline-none hover:text-black hover:bg-white transition duration-500 rounded font-bold text-xl'>Explore Now</Link> 
            </div>
           ))}
           </div>
            </div>
       </section>
    </>
  )
}

export default banner