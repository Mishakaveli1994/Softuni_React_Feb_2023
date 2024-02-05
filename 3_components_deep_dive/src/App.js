import MovieList from './components/MovieList.js';
import { useState, useEffect } from 'react';
// import { movies as MovieData } from './movies.js_bkp';

function App() {
    //     const [movies, setMovies] = useState(MovieData.slice(0, 10));

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies.json')
            .then((response) => response.json())
            .then((data) => setMovies(data.movies));
    }, []);

    const onMovieDelete = (id) => {
        setMovies((state) => state.filter((movie) => movie.id !== id));
    };

    const onMovieSelect = (id) => {
        setMovies((state) => state.map((movie) => ({ ...movie, selected: movie.id === id })));
    };

    return (
        <div>
            <h1>Movie Collection</h1>

            <MovieList movies={movies} onMovieDelete={onMovieDelete} onMovieSelect={onMovieSelect} />
        </div>
    );
}

export default App;
