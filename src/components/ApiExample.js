import React, { useEffect } from 'react'
import { useState } from 'react'
import ApiProps from './ApiProps'
import { data } from '../App'

const ApiExample = () => {

  const [articles, setarticles] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=af38b42e1f974d2cb9758cf5ef4122ba')
    if (response) {
      const data = await response.json()
      setarticles(data.articles)
      console.log(data);

    }
  }

  const handleurlToImage = (url) => {
    window.open(url);
  }
  return (
    <div>
      <ApiProps data={articles} handleurlToImage={handleurlToImage} />
    </div>
  );

}

export default ApiExample
