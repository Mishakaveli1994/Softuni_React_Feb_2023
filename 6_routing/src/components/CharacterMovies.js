import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const CharacterMovies = ({ character }) => {
    const { characterId } = useParams();
    const [films, setFilms] = useState([]);
    // ! Would usually fetch something like /people/:characterId/films from swapi, but it doesn't exist

    useEffect(() => {
        const fetchAllMovies = async () => {
            const data = await Promise.all(
                character.films.map((movie) =>
                    fetch(movie).then((resp) => resp.json())
                )
            );
            setFilms(data); // Update films state
        };

        if (character.films) {
            // Don't call 'fetchAllMovies'  initially, wait for 'character'
            fetchAllMovies();
        }
    }, [characterId, character.films]);

    return (
        <>
            {films.length > 0 ? (
                <>
                    <h1>Character Movies</h1>
                    <ul>
                        {films.map((film) => (
                            <li key={film.url}><Link to={`/movies/${film.url.split('/')[film.url.split('/').length - 2]}`}>{film.title}</Link></li>
                        ))}
                    </ul>{' '}
                </>
            ) : (
                <div>Loading Character Movies...</div>
            )}
        </>
    );
};
