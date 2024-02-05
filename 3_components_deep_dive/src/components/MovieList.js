import Movie from './Movie';
import React from 'react';

export default function MovieList({ movies, onMovieDelete, onMovieSelect }) {
    // const movieElements = [];
    // for (const movie of movies) {
    //     // movieElements.push(React.createElement(Movie, movie));+
    //     movieElements.push(<li><Movie {...movie} /></li>);
    // }
    //  When adding ID to lists, needs to be at the top <li> level - meaning the root level element we are creating via loop and not the child element
    const movieList = movies.map((movie) => (
        <li key={movie.id}>
            <Movie {...movie} onMovieDelete={onMovieDelete} onMovieSelect={onMovieSelect} />
        </li>
    ));

    return <ul>{movieList}</ul>;
    // return [<Movie {...movies[0]} />, <Movie {...movies[1]} />, <Movie {...movies[2]} />];
}
