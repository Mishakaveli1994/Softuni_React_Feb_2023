import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export const CharacterVehicles = ({ character }) => {
    const { characterId } = useParams();
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        const fetchAllVehicles = async () => {
            const data = await Promise.all(
                character.vehicles.map((vehicle) =>
                    fetch(vehicle).then((resp) => resp.json())
                )
            );
            setVehicles(data); // Update vehicles state
        };

        if (character.starships) {
            // Don't call 'fetchAllVehicles'  initially, wait for 'vehicles'
            fetchAllVehicles();
        }
    }, [characterId, character.vehicles]);

    return (
        <>
            {vehicles.length > 0 ? (
                <>
                    <h1>Character Vehicles</h1>
                    <ul>
                        {vehicles.map((vehicle) => (
                            <li key={vehicle.url}><Link to={`/starships/${vehicle.url.split('/')[vehicle.url.split('/').length - 2]}`}>{vehicle.name}</Link></li>
                        ))}
                    </ul>{' '}
                </>
            ) : (
                <div>Loading Character Vehicles...</div>
            )}
        </>
    );
};
