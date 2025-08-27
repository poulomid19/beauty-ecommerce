import info from '../components/categories/haircare'
import Navbar from '../components/Navbar'
import Footer from '../components/footers/Footer'
import Category from '../components/categories/Category'
const Haircare = () => {
  return (
    <>
      <Navbar/>
       <Category title={"Hair care"} subtitle={"Our haircare collection is designed to keep your hair strong, shiny, and full of life. From nourishing shampoos and conditioners to revitalizing oils and masks, each product is carefully chosen to target different hair types and concerns."} items={info}/>
       <Footer/>
    </>
  )
}

export default Haircare