import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom';
import { CharacterMovies } from './CharacterMovies.js';
import { CharacterStarships } from './CharacterStarships.js';
import { CharacterVehicles } from './CharacterVehicles.js';
import { Navigation } from './Navigation.js';

const baseURL = 'https://swapi.dev/api';

export const Character = () => {
    const { characterId } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseURL}/people/${characterId}`)
            .then((response) => response.json())
            .then((data) => {
                setCharacter(data);
                // console.log(data);
            });
    }, [characterId, setCharacter]);

    const onBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <>
            <h1>Character Page</h1>
            <h2>{character.name}</h2>
            <button onClick={onBackButtonClick}>Back</button>

            <Navigation>
                <li>
                    <Link to={'movies'}>Movies</Link>
                </li>
                <li>
                    <Link to={'vehicles'}>Vehicles</Link>
                </li>
                <li>
                    <Link to={'starships'}>Starships</Link>
                </li>
            </Navigation>
            <Routes>
                <Route
                    path="/movies"
                    element={<CharacterMovies character={character} />}
                ></Route>
                <Route
                    path="/vehicles"
                    element={<CharacterVehicles character={character} />}
                ></Route>
                <Route
                    path="/starships"
                    element={<CharacterStarships character={character} />}
                ></Route>
            </Routes>
        </>
    );
};
