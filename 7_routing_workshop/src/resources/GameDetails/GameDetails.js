import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as gameService from '../../services/gameService';

export const GameDetails = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        gameService.getGameById(gameId).then((result) => {
            setGame(result);
        });
    }, [gameId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();
        const result = await gameService.addComment(gameId, {
            username,
            comment
        });
        setGame((state) => ({
            ...state,
            comments: { ...state.comments, result }
        }));
        setUsername('');
        setComment('');
    };

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onCommentChange = (e) => {
        setComment(e.target.value);
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        {game.comments &&
                            Object.values(game.comments).map((comment) => (
                                <li key={comment._id} className="comment">
                                    <p>
                                        {comment.username}: {comment.comment}
                                    </p>
                                </li>
                            ))}
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}

                    {game.comments &&
                        Object.values(game.comments).length === 0 && (
                            <p className="no-comment">No comments.</p>
                        )}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">
                        Edit
                    </a>
                    <a href="#" className="button">
                        Delete
                    </a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Pesho"
                        value={username}
                        onChange={onUsernameChange}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={comment}
                        onChange={onCommentChange}
                    ></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
};
