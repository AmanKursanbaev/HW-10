import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css'

const App = () => {
  const [expenses, setExpenses] = useState([])
  const sendDataExpenses = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState]
    })
  }
  const deleteChangeHandler = (el) => {
    setExpenses(expenses.filter((e) => e.id !== el))
  }
  return (
    <div className="App">
      <TodoForm onAddData={sendDataExpenses}/>
      <Todo expenses={expenses}  onDelete={deleteChangeHandler} />
    </div>
  );
}
export default App; 

