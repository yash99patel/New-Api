import React, { useEffect } from 'react'
import { useState } from 'react'
import ApiProps from './ApiProps'
import { data } from '../App'
import axios from 'axios'

const ApiExample = () => {

    const categoryData = [
        { name: "business" },
        { name: "entertainment" },
        { name: "general" },
        { name: "health" },
        { name: "science" },
        { name: "sports" },
        { name: "technology" }
    ]



    const [articles, setarticles] = useState([])
    const [category, setCategory] = useState("general")
    useEffect(() => {
        fetchData()
    }, [category])

    const fetchData = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=af38b42e1f974d2cb9758cf5ef4122ba `)
    if (response) {
            const data = await response.json()
            setarticles(data.articles)
            console.log(data);

        }
    }


    const GetData = async (item) => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=af38b42e1f974d2cb9758cf5ef4122ba`)
    const res = await response.json()
        console.log(response, "response");

    }

    const GetApiData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=af38b42e1f974d2cb9758cf5ef4122ba")
            .then((response) => console.log(response, "response"))
            .catch((error) => console.log(error));
    }
    const handleCetagory = (name) => {
        console.log(name, "name====>")
        setCategory(name)
    }
    const handleurlToImage = (url) => {
        window.open(url);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-light">

                <div class="container-fluid">
                    <ul class="navbar-nav">
                        {categoryData.map((item) => (
                            <li class="nav-item">
                                <p class="nav-link" onClick={() => handleCetagory(item.name)}>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <ApiProps
                data={articles} handleurlToImage={handleurlToImage}
            />
        </div>
    );

}

export default ApiExample
