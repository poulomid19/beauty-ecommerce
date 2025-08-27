import reviews from './reviews'
import '../../App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
const Testimonial = () => {
  return (
    <>
     <section className="text-gray-900 py-20 px-20 bg-amber-50 pb-10">
       <div className="flex flex-wrap">
         <div className="px-2 w-1/2">
         <div className="flex flex-wrap w-full h-[50vh] sm:py-24 py-16 sm:px-10 px-6 relative">
           <h3 className='text-4xl font-bold'>What our customers <br/>are saying about us</h3>
           <p className="text-2xl font-semibold text-gray-600">Real experiences from Our happy customers who trust our products</p>
         </div>
         </div>
          <div className="px-2 w-1/2">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
  {reviews.map((r,index) => (
    <SwiperSlide key={index}>
      <div className="flex w-full sm:py-24 py-16 sm:px-10 relative">
      <div className="bg-stone-50 rounded-2xl shadow-lg px-10 py-10">
        <div className='flex flex-wrap justify-between'>
              <h4 className="text-2xl font-semibold mb-5">{r.name}</h4>
              <img src={`https://ui-avatars.com/api/?name=${r.name}&background=random&color=fff`} className="review-avatar"/>
          </div>    
          <p>{"⭐".repeat(r.rating)}</p>
          <p className="text-xl font-semibold">{r.review}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
    </Swiper>
     </div>
      </div>
    </section>
    </>
  )
}

export default Testimonial