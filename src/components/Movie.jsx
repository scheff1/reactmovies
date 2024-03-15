import React from "react";

function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="movie card">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster === 'N/A' ? (
                    <img className="activator" src={`https://via.placeholder.com/300x552?text=${title}`}/>
                ) :

                    <div className="background-card" style={{background: `url(${poster}) center/cover no-repeat`}}></div>
            }
        </div>
        <div className="card-content">
           <span className="card-title activator gray-text text-darken-4">{title}
           </span>
           <p>{year}<span className="right">{type}</span></p>
        </div>
    </div>
}

export { Movie };