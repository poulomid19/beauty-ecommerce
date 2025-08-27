import info from '../components/categories/skincare'
import Navbar from '../components/Navbar'
import Footer from '../components/footers/Footer'
import Category from '../components/categories/Category'
const Skincare = () => {
  return (
    <>
      <Navbar/>
       <Category title={"Skin care"} subtitle={"Discover everything your skin needs in one place. Our store offers a wide range of cleansers, moisturizers, serums, and masks — all made to suit different skin types and concerns."} items={info}/>
       <Footer/>
    </>
  )
}

export default Skincare