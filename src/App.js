import { Fragment } from "react"
import Hero from "./components/Hero"
import BestCardComponent from "./components/Cart/bestsell"
import BestProducts from "./components/Products/bestsell"
import CardComponent from "./components/Cart/index"
import Products from "./components/Products/index"
import Offer from "./components/offer"
import DesignProducts from "./components/Products/design"
import DesignCardComponent from "./components/Cart/design"
import Feedback from "./components/Feedback"
function App() {
  return (
    <div>
      <Hero />
      <BestProducts />
      <Products />
      <Offer />
      <DesignProducts />
      <Feedback />
    </div>
  )
}

export default App
