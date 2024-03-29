import { useEffect } from "react"
import BestCardComponent from "../Cart/bestsell";
import "./bestproducts.style.scss";
import axios from "axios";
import { useState } from "react"

const BestProducts = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setData(response.data.slice(0, 3)))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="btext-content">
            <h2>Best selling</h2>
            <p>Get in on the trend with our curated selection of best-selling styles.</p>
            <div className="bproducts-container">
                {data.map((item) =>
                    <BestCardComponent key={item.id} title={item.title} price={item.price} rate={item.rating.rate} image={item.image} />
                )}
            </div>
            <button>See all →</button>
        </div>
    );
};

export default BestProducts;
