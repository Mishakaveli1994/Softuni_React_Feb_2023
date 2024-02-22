import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Navbar.js';
import { TodoList } from './components/TodoList.js';
import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((todos) => {
                setTodos(Object.values(todos));
            });
    }, []);

    return (
        <div className="App">
            <Header />
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
