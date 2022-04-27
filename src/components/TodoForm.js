import { useState } from "react"
import './TodoForm.css'
const TodoForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
        id: Math.random(),
        title,
        amount: +amount,
        date: new Date(date).toLocaleDateString()
        }
        props.onAddData(data)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-input">
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div>
                <label>Amount</label>
                <input type="number" value={amount} onChange={amountChangeHandler} />
            </div>
            <div>
                <label>Date</label>
                <input type="date" value={date} onChange={dateChangeHandler} />
            </div>
            <button>Add</button>
            </div>
            
        </form>
    )
}
export default TodoForm;