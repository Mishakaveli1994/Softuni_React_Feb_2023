import { Link } from 'react-router-dom';

export const CharacterListItem = ({ name, url }) => {
    const characterId = url.split('/')[url.split('/').length - 2];
    return (
        <div>
            <Link to={`/characters/${characterId}`}>{name}</Link>
        </div>
    );
};
