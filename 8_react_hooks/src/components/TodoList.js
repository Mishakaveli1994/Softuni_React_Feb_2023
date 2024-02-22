import { TodoItem } from './TodoItem.js';
import ListGroup from 'react-bootstrap/ListGroup';

export const TodoList = ({ todos }) => {
    console.log(todos);
    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>Todo List:</h1>
            <ListGroup>
            {todos.map((todo) => (
                <TodoItem key={todo._id} {...todo} />
            ))}
            </ListGroup>
        </div>
    );
};
