import './App.css';
import MovieList from './components/MovieList.js';

function App() {
    const movies = [
        { title: 'Man of Steel', year: '2005', cast: ['Henry Cavill', 'Random Actor'] },
        { title: 'Betsi', year: '2019', cast: ['Misho', 'Beti'] },
        { title: 'Harry Potter', year: '2003', cast: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson'] }
    ];

    return (
        <div className="App">
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
