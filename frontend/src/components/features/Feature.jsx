import feature from './features'
const Feature = () => {
  return (
    <>
    <section className="text-gray-600 body-font bg-yellow-50">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Why Choose Us</h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-700 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {feature.map((f)=>(
      <div className="p-4 md:w-1/4 flex flex-col text-center items-center" key={f.id}>
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
          <img src={f.image}/>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font font-bold mb-3 text-teal-700">{f.name}</h2>
          <p className="font-medium text-base">{f.title}</p>
        </div>
      </div>
      ))}
      </div>
      </div>
</section>
</>
  )
}

export default Feature