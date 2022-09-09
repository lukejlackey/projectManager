import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({})

    const displayAttrs = ['title', 'price', 'description'];

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                console.log(res.data.product);
                setProduct(res.data.product);
            })
    }, [])

    return (
        <div>
            {
                Object.keys(product)
                    .filter((k) => displayAttrs.includes(k))
                    .map((k, i) => 
                    <div key={i}>
                        <h3>{product[k]}</h3>
                    </div>
                )
            }
            <Link to={'/'}>View All Products</Link>
        </div>
    )
}

export default Product