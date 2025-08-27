import info from '../components/categories/makeup'
import Category from '../components/categories/Category'
import Navbar from '../components/Navbar'
import Footer from '../components/footers/Footer'

const Makeup = () => {
  return (
    <>
       <Navbar/>
       <Category title={"Makeup"} subtitle={"Finding the right makeup shouldn’t be complicated. That’s why our store offers a wide variety of foundations, lipsticks, eyeliners, and more"} items={info}/>
       <Footer/>
    </>
  )
}

export default Makeup