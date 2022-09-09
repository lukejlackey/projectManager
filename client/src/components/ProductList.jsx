import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductsList = () => {

    const [products, setProducts] = useState([])
    const [deletedProduct, setDeletedProduct] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/products/all")
            .then(res => {
                console.log(res.data.products);
                setProducts(res.data.products);
            })
    }, [deletedProduct])

    const handleDelete = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/products/delete/${id}`)
            .then(res => console.log(res))
            .then(setDeletedProduct(!deletedProduct))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, i) => 
                    <div key={i}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <button onClick={(e) => handleDelete(e, product._id)}>Delete</button>
                        <br/>
                    </div>
                )
            }
        </div>
    )
}

export default ProductsList