import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProjectsList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/projects/all")
            .then(res => {
                console.log(res.data.projects)
                setProducts(res.data.projects);
            })
    }, [])

    return (
        <div>
            <h1>All Projects:</h1>
        </div>
    )
}

export default ProjectsList