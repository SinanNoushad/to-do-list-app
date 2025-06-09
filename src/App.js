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

  return (
    <div className="h-[500px] w-[500px] rounded-lg bg-blue-500 flex  items-center flex-col ">
      <p className="text-2xl font-bold mt-[30px]">TODO LIST</p>
      <div className="mt-[20px] h-[40px] w-[90%] flex flex-row justify-start bg-red-800">
        <input
          className="h-[100%] w-[89%] mr-[1%] rounded-sm"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button title="Add" className="bg-yellow-500 w-[10%]" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="h-[60%] w-[90%] mt-[5%] bg-purple-500 rounded-sm">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
