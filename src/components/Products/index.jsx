import { useEffect } from "react"
import CardComponent from "../Cart"
import "./products.style.scss"
import axios from "axios"
import { useState } from "react"

const Products = () => {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((data) => setData(data.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="products-container">
            {data.map((item) =>
                <CardComponent title={item.title} price={item.price} rate={item.rating.rate} image={item.image} />
            )}
        </div>
    )
}
export default Products