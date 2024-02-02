import './App.css';
import Counter from './components/Counter.js';
import MovieList from './components/MovieList.js';
import Timer from './components/Timer.js';

function App() {
    const movies = [
        { title: 'Man of Steel', year: '2005', cast: ['Henry Cavill', 'Random Actor'] },
        { title: 'Betsi', year: '2019', cast: ['Misho', 'Beti'] },
        { title: 'Harry Potter', year: '2003', cast: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson'] }
    ];

    return (
        <div className="App">
            <h1>React Demo</h1>
            <Counter canReset />
            <Timer start={0} />
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
