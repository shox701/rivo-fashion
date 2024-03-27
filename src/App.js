import { Fragment } from "react"
import Hero from "./components/Hero"
import CardComponent from "./components/Cart"
import Products from "./components/Products"
import Offer from "./components/offer"

function App() {
  return (
    <div>
      <Hero />
      <Products />
      <Offer />
    </div>
  )
}

export default App
