import AboutUs from "../about/AboutUs"
import Categories from "../categories/Categories"
import Discount from "../discount/Discount"
import Catalog from "../catalog/Catalog"
import Contact from "../contact/Contact"
import Client from "../clients/Client"
import Info from "../info/Info"
import Header from "../header/Header"
import Slider from "../slider/Slider"

function Home() {

  return (
    <>
      <div className="hero_area">
        <Header />
        <Slider />
      </div>
      <AboutUs />
      <Categories />
      <Discount />
      <Catalog />
      <Contact />
      <Client />
      <Info />
    </>
  )
}
export default Home
