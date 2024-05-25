/* eslint-disable react/prop-types */

import { FaCheck, FaTrash } from "react-icons/fa";
import "./TodoItem.css"
function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span>{todo.text}</span>
      <div className="icons">
        <FaCheck
          className={`icon ${todo.completed ? "completed-icon" : ""}`}
          onClick={() => toggleComplete(index)}
        />
        <FaTrash className="icon" onClick={() => deleteTodo(index)} />
      </div>
    </div>
  );
}

export default TodoItem;
