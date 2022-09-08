import React, {useState} from 'react'
import axios from 'axios';

const NewProduct = () => {

    const [product, setProduct] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e, keyName) => {
        const newVal = {};
        newVal[keyName] = e.target.value;
        setProduct(Object.assign(product, newVal))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/projects/new", {
            ...product
        })            
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={(e) => handleChange(e, 'title')}/>
                    {
                        errors['title']?
                        <p>{errors['title']}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="price">Price: $</label>
                    <input type="number" id="price" onChange={(e) => handleChange(e, 'price')} min='0' step='0.01'/>
                    {
                        errors['price']?
                        <p>{errors['price']}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" onChange={(e) => handleChange(e, 'description')}/>
                    {
                        errors['description']?
                        <p>{errors['description']}</p>:
                        ''
                    }
                </div>
                <input type='submit' value='Create'/>
            </form>
        </div>
    )
}

export default NewProduct;