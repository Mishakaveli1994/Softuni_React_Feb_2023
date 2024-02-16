import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export const CharacterStarships = ({ character }) => {
    const { characterId } = useParams();
    const [starships, setStarships] = useState([]);
    useEffect(() => {
        const fetchAllStarships = async () => {
            const data = await Promise.all(
                character.starships.map((starship) =>
                    fetch(starship).then((resp) => resp.json())
                )
            );
            setStarships(data); // Update starships state
        };

        if (character.starships) {
            // Don't call 'fetchAllStarships'  initially, wait for 'starships'
            fetchAllStarships();
        }
    }, [characterId, character.starships]);

    return (
        <>
            {starships.length > 0 ? (
                <>
                    <h1>Character Starships</h1>
                    <ul>
                        {starships.map((starship) => (
                            <li key={starship.url}><Link to={`/starships/${starship.url.split('/')[starship.url.split('/').length - 2]}`}>{starship.name}</Link></li>
                        ))}
                    </ul>{' '}
                </>
            ) : (
                <div>Loading Character starships...</div>
            )}
        </>
    );
};
