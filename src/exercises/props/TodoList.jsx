function TodoList({ todos }) {
    // TODO: fai il mapping di todos in <li>
    return (
        <ul>
            {todos.map((todo, index) =>
                <li key={index}>{todo}</li>
            )}

        </ul>
    )

}

export default TodoList;