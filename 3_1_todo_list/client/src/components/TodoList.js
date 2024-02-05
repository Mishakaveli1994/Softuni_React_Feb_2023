import Todo from './Todo.js';

export default function TodoList({ todos, toggleTodoStatus }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Todo item --> */}
                {todos.map((todo) => (
                    <Todo {...todo} toggleTodoStatus={toggleTodoStatus} key={todo.id} />
                ))}
            </tbody>
        </table>
    );
}
