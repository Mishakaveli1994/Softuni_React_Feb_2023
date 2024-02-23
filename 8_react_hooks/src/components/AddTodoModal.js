import { Button, Form, Modal } from 'react-bootstrap';

import { useForm } from '../hooks/useForm';

export const AddTodoModal = ({ onTodoAddSumbit, show, onTodoAddClose }) => {
    const { formValues, onChangeHandler, onSubmit } = useForm(
        { text: '' },
        onTodoAddSumbit
    );

    return (
        <Modal show={show} onHide={onTodoAddClose}>
            <Modal.Header closeButton onHide={onTodoAddClose}>
                <Modal.Title>Add TODO</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicTodo">
                        <Form.Label>TODO</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Do the dishes"
                            value={formValues.text}
                            onChange={onChangeHandler}
                            name="text"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add
                    </Button>

                    <Button
                        variant="secondary"
                        style={{ marginRight: '10px' }}
                        onClick={onTodoAddClose}
                    >
                        Close
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
