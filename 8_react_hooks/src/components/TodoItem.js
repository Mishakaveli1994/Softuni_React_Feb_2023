import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext.js';

export const TodoItem = ({ text, isCompleted, _id }) => {
    const { onTodoDeleteClick, onTodoClick } = useContext(TodoContext);
    return (
        <>
            <ListGroup.Item
                action
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <p
                    onClick={() => onTodoClick(_id)}
                    style={{
                        textDecoration: isCompleted ? 'line-through' : 'none'
                    }}
                >
                    {text}
                </p>
                <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>
                    X
                </Button>
            </ListGroup.Item>
        </>
    );
};
