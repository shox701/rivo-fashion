import { useEffect } from "react"
import DesignCardComponent from "../Cart/design";
import "./design.style.scss";
import axios from "axios";
import { useState } from "react"

const DesignProducts = () => {
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
        <div className="dtext-content">
            <h2>Designer Clothes For You</h2>
            <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
            <div className="dproducts-container">
                {data.map((item) =>
                    <DesignCardComponent key={item.id} title={item.title} image={item.image} description={item.description} />
                )}
            </div>
        </div>
    );
};

export default DesignProducts;
