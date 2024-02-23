import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Navbar.js';
import { TodoList } from './components/TodoList.js';
import { useState, useEffect } from 'react';
import { AddTodoModal } from './components/AddTodoModal.js';
import { TodoContext } from './contexts/TodoContext.js';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    const [todos, setTodos] = useState([]);
    const [showAddTodoModal, setShowAddTodoModal] = useState(false);

    useEffect(() => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((todos) => {
                setTodos(Object.values(todos));
            });
    }, []);

    const onTodoAddSumbit = async (values) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({ ...values, isCompleted: false }),
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();
        setTodos([...todos, result]);

        setShowAddTodoModal(false);
    };

    const onTodoAddClick = () => {
        setShowAddTodoModal(true);
    };

    const onTodoAddClose = () => {
        setShowAddTodoModal(false);
    };

    const onTodoDeleteClick = (id) => {
        fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then((data) => {
                setTodos((state) => state.filter((todo) => todo._id !== id));
            });
    };

    const onTodoClick = async (id) => {
        const todo = todos.find((x) => x._id === id);
        await fetch(`${baseUrl}/${id}`, {
            // method: 'PATCH',
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            // mode: 'cors',
            body: JSON.stringify({
                ...todo,
                isCompleted: !todo.isCompleted
            })
        });
        setTodos((state) =>
            state.map((todo) =>
                todo._id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    const contextValue = { onTodoDeleteClick, onTodoClick };

    return (
        <TodoContext.Provider value={contextValue}>
            <div className="App">
                <Header />
                <TodoList todos={todos} onTodoAddClick={onTodoAddClick} />
                <AddTodoModal
                    show={showAddTodoModal}
                    onTodoAddSumbit={onTodoAddSumbit}
                    onTodoAddClose={onTodoAddClose}
                />
            </div>
        </TodoContext.Provider>
    );
}

export default App;
