import MovieCard from "../components/MovieCard";
import {useState} from 'react';
import "../css/Home.css"

function Home(){
    const[searchQuery, setSearchQuery]= useState("");
    const movies=[
        {id: 1, title:"john wick", release_date: "2020"},
        {id: 2, title:"terminator", release_date: "2019"},
        {id: 3, title:"Dune", release_date: "2017"},
        {id: 4, title:"Bellarine", release_date: "2021"},
        {id: 5, title:"World War Z", release_date: "2022"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery(".........")
    };

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for Movies"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie)=>( 
                    <MovieCard movie={movie} key={movie.id}/>
                    ))}
            </div>
        </div>
    );
}

export default Home