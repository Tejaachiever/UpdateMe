import React, { useEffect, useState } from 'react'
import Card from './Card'
import './news.css'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const apiKey = import.meta.env.VITE_API_KEY_news;


    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0, 10)
        setNewsData(dt)

    }

    useEffect(() => {
        getData()
    }, [])

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)

    }
    const userInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className='news-container'>


            <div className="news-head">

                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>

            {(isMenuOpen && 
                <div className='categoryBtn  '>
                    <button onClick={userInput} value="sports">Sports</button>
                    <button onClick={userInput} value="politics">Politics</button>
                    <button onClick={userInput} value="health">Health</button>
                    <button onClick={userInput} value="fitness">Fitness</button>
                    <button onClick={userInput} value="entertainment">Entertainment</button>
                </div>
            )}
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>



            </div>


            {newsData ? <Card data={newsData} /> : null}


        </div>
    )
}

export default Newsapp