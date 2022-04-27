const Todo = (props) => {
    const deleteChangeHandler = (id) => {
        props.onDelete(id)
    }
    return (
        <ul>
            {props.expenses.map((el) => {
                return (
                    <li key={el.id}>
                        <h1>{el.title}</h1>
                        <h3>{el.amount}</h3>
                        <h2>{el.date}</h2>
                        <button onClick={() => deleteChangeHandler(el.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}
export default Todo;