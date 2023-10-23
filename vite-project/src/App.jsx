import { useState } from "react";
import "./css/bootstrap.css";
import "./styles.css";
import Navbar from "./components/navbar";
import "./js/bootstrap";

export default function App() {
  const [newItem, setNewItem] = useState("jagjag");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="container">
        <div className="row border border-dark border-1 ">
          <label htmlFor="item">New Form</label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="enter the new todo"
          />

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>

      <center>
        <h1 className="header">Todo List</h1>
        <ul className="list">
          {todos.length === 0 && "No item in Todo"}
          {todos.map((todo) => {
            return (
              <>
                <li key={todo.id}>
                  <label htmlFor="item">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    />
                    {todo.title}
                  </label>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </center>
    </>
  );
}
