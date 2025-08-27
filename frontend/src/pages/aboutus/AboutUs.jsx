import value from './about'
import Navbar from '../../components/Navbar'
import Feature from '../../components/features/Feature'
import Footer from '../../components/footers/Footer'
import Banners from '../../components/Banners'
import img from './about.jpg'
const About = () => {
  return (
    <>
      <Navbar/>
      <section className='bg-yellow-50'>
         <Banners info={value} img={img}/>
      </section>
      <Feature/>
      <Footer/>
    </>
  )
}

export default About