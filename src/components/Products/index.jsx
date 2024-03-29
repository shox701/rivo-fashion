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
        <div className="text-content">
            <h2>Our Products</h2>
            <ul>
                <li>Sale</li>
                <li>HOT</li>
                <li>New Arrivals</li>
                <li>Accessories</li>

            </ul>
            <div className="products-container">
                {data.map((item) =>
                    <CardComponent key={item.id} title={item.title} price={item.price} rate={item.rating.rate} image={item.image} />
                )}
            </div>
        </div>
    )
}
export default Products