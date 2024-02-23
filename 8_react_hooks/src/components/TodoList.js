import { TodoItem } from './TodoItem.js';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

export const TodoList = ({ todos, onTodoAddClick }) => {
    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>Todo List:</h1>
            <ListGroup style={{ marginBottom: '10px' }}>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo._id}
                        {...todo}
                    />
                ))}
            </ListGroup>

            <Button variant="primary" onClick={onTodoAddClick}>
                Add
            </Button>
        </div>
    );
};
