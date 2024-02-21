import { Link } from 'react-router-dom';

export const CatalogItem = ({ title, categories, imageUrl, _id }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{categories}</h6>
                <h2>{title}</h2>
                <Link to={`/catalog/${_id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
};
