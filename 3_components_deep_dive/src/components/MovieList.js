import Movie from './Movie';
import React from 'react';

export default function MovieList({ movies }) {
    // const movieElements = [];
    // for (const movie of movies) {
    //     // movieElements.push(React.createElement(Movie, movie));+
    //     movieElements.push(<li><Movie {...movie} /></li>);
    // }

    const movieList = movies.map((movie) => (
        <li>
            <Movie {...movie} />
        </li>
    ));

    return <ul>{movieList}</ul>;
    // return [<Movie {...movies[0]} />, <Movie {...movies[1]} />, <Movie {...movies[2]} />];
}
