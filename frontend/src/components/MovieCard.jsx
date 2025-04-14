import React from 'react';
import './MovieCard.css';

const MovieCard = ({movie}) => {
     function onFavoriteClick(){
        alert("clicked");
    }
    
     return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url || 'https://via.placeholder.com/150'} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
     
}

export default MovieCard
