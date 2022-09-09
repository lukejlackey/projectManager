import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductsList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/products/all")
            .then(res => {
                console.log(res.data.products);
                setProducts(res.data.products);
            })
    }, [])

    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, i) => 
                    <div key={i}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <br/>
                    </div>
                )
            }
        </div>
    )
}

export default ProductsList