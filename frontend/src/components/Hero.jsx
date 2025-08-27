import React from 'react'

const Hero = () => {
  return (
    <>
  <section>
      <div className="w-full py-32 px-10 pb-4 h-screen bg-fixed bg-center bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: "url('hero.jpg')" }}>
        <div className="text-center relative w-full mb-50">
            <p className="text-md font-medium mr-90 mb-5">New In Town</p>
          <h1 className="text-6xl text-gray-900 font-bold title-font mb-2">The New Beauty</h1>
          <h1 className="text-6xl text-gray-900 font-bold title-font mb-2">Collection</h1>
          <button className='bg-lime-700  text-white border-2 border-lime-700 py-1 px-3 focus:outline-none hover:text-lime-700 hover:bg-white transition duration-500 rounded mt-5 font-bold text-xl'>SHOP NOW</button>
        </div>
      </div>
  </section>
    </>
  )
}

export default Hero