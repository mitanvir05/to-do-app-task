import  { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./App.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
      toast.success('To-Do item added successfully!');
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    const action = updatedTodos[index].completed ? 'completed' : 'marked incomplete';
    toast.info(`To-Do item ${action}`);
  
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
    toast.error('To-Do item deleted successfully!');
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new to-do"
        />
        <button onClick={addTodo}>Add ToDo</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
