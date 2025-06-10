import React, { useState } from "react";
import Todo from "./components/todo";
import "./App.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="h-[500px] w-[500px] rounded-lg bg-white flex  items-center flex-col ">
      <p className="text-2xl font-bold mt-[30px]">TODO LIST</p>
      <div className="mt-[20px] h-[40px] w-[90%] flex flex-row justify-start">
        <input
          className="h-[100%] w-[89%] mr-[1%] rounded-sm bg-blue-300"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button title="Add" className="bg-blue-500 w-[10%]" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="h-[60%] w-[90%] mt-[5%] bg-blue-300 rounded-sm">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggle={handleToggle}
          />
        ))}
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
