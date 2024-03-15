import React from "react";

import { Movie } from './Movie';

function Movies(props) {
    const { movies } = props;

    return (
        <div className='movies'>
            {movies && movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (
                <div className="error">
                <h4>Try again vro...</h4>
                </div>
            )}
        </div>
    )
}

export { Movies };