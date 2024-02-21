import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as gameService from './services/gameService';

import { Header } from './resources/Header';
import { Footer } from './resources/Footer';
import { Home } from './resources/Home';
import { Login } from './resources/Login';
import { Register } from './resources/Register';
import { CreateGame } from './resources/CreateGame';
import { GameCatalog } from './resources/GameCatalog';
import { GameDetails } from './resources/GameDetails/GameDetails';

function App() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAllGames().then((result) => {
            setGames(result);
        });
    }, []);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.createGame(data);
        setGames([...games, newGame]);

        navigate('/catalog');
    };

    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route
                        path="/create-game"
                        element={
                            <CreateGame
                                onCreateGameSubmit={onCreateGameSubmit}
                            />
                        }
                    ></Route>
                    <Route
                        path="/catalog"
                        element={<GameCatalog games={games} />}
                    ></Route>
                    <Route path="/catalog/:gameId" element={<GameDetails />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
