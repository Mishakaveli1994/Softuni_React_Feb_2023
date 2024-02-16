import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { CharacterList } from './components/CharacterList';
import { Character } from './components/Character.js';
import { MainNavigation } from './components/MainNavigations';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MainNavigation />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route
                        path="/characters"
                        element={<CharacterList />}
                    ></Route>
                    <Route
                        path="/characters/:characterId/*"
                        element={<Character />}
                    ></Route>
                    <Route path="*" element={<h1>404 Not Found</h1>}></Route>
                </Routes>
            </header>
        </div>
    );
}

export default App;
