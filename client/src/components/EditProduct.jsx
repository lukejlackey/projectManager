import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [errors, setErrors] = useState({});

    const displayAttrs = ['title', 'price', 'description'];

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                console.log(res.data.product);
                setProduct(res.data.product);
            })
    }, [])

    const handleChange = (e, keyName) => {
        const newVal = {};
        newVal[keyName] = e.target.value;
        setProduct(Object.assign(product, newVal))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/products/update/${id}`, {
            ...product
        })            
            .then(res=>{
                setErrors({'noErrors' : true});
                console.log(res);
                setErrors(res.data.error.errors)
            })
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                Object.keys(product)
                    .filter((k) => displayAttrs.includes(k))
                    .map((k, i) => 
                    <div key={i}>
                        <label htmlFor={k}>{k}</label>
                        <input id={k} defaultValue={product[k]} type={typeof product[k] === "string"? "text" : typeof product[k]} step="0.01" onChange={(e) => handleChange(e, k)}/>
                        {
                            errors[k]?
                            <p>{errors[k]['message']}</p>:
                            ''
                        }
                    </div>
                    )
            }
            {
                errors['noErrors']?
                <p>Updated!</p>:
                ''
            }
            <input type="submit" value="Save Changes"/>
            <Link to={'/'}>View All Products</Link>
        </form>
    )
}

export default Product