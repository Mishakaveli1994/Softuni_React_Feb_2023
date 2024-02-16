import { useEffect, useState } from 'react';
import { CharacterListItem } from './CharacterListItem.js';

const baseURL = 'https://swapi.dev/api';

export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/people/`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results[1]);
                setCharacters(data.results);
            });
    }, []);

    return (
        <>
            <h1>Star War Characters</h1>
            <ul>
                {characters.map((character) => (
                    <CharacterListItem key={character.url} {...character} />
                ))}
            </ul>
        </>
    );
};
