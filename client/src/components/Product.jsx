import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const displayAttrs = ['title', 'price', 'description'];

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                console.log(res.data.product);
                setProduct(res.data.product);
            })
    }, [])

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/products/delete/${id}`)
            .then(res => console.log(res))
            .then(navigate('/'))
            .catch(err => console.log(err));
    }

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
            <Link to={`/products/${id}/edit`}>Edit</Link>
            <br/>
            <button onClick={handleDelete}>Delete</button>
            <br/>
            <Link to={'/'}>View All Products</Link>
        </div>
    )
}

export default Product