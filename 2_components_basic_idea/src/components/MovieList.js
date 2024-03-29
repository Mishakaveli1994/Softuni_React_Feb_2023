import Movie from './Movie.js';

const MovieList = (props) => {
    return (
        <div>
            <h2>Movie List</h2>
            <Movie title={props.movies[0].title} year={props.movies[0].year} cast={props.movies[0].cast} />
            <Movie title={props.movies[1].title} year={props.movies[1].year} cast={props.movies[1].cast} />
            <Movie title={props.movies[2].title} year={props.movies[2].year} cast={props.movies[2].cast} />
        </div>
    );
};

export default MovieList;
