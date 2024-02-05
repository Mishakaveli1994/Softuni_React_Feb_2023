import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Spinner from './components/Spinner.js';
import TodoList from './components/TodoList.js';
import { useState, useEffect } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then((response) => response.json())
            .then((data) => {
                const result = Object.keys(data).map((id) => ({ id, ...data[id] }));
                setTodos(result);
                setIsLoading(false);
            });
    }, [isLoading]);

    const onTodoAdd = () => {
        const lastId = Number(todos[todos.length - 1].id);
        const text = prompt('Please enter the title of the new todo:');
        const newTask = { id: lastId + 1, text, isCompleted: false };
        setTodos((oldState) => [newTask, ...oldState]);
    };

    const toggleTodoStatus = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo))
        );
    };

    return (
        <div>
            {/* <!-- Navigation header --> */}
            <Header />

            {/* <!-- Main content --> */}
            <main className="main">
                {/* <!-- Section container --> */}
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn" onClick={onTodoAdd}>
                            + Add new Todo
                        </button>
                    </div>

                    <div className="table-wrapper">
                        {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
                        {/* <!-- Todo list table --> */}

                        {isLoading ? <Spinner /> : <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus} />}
                    </div>
                </section>
            </main>

            {/* <!-- Footer --> */}
            <Footer />
        </div>
    );
}

export default App;
