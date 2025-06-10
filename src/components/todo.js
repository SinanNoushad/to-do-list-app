import React, { useState } from "react";
function Todo({ id, text, completed, onDelete, onEdit, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(text);

  const handleSave = () => {
    if (editValue.trim() !== "") {
      onEdit(id, editValue);
      setIsEditing(false);
    }
  };

  return (
    <div className="m-[10px] bg-blue-100 h-[40px] flex items-center rounded-sm">
      <input
        className="h-[15px] w-[15px] ml-[10px]"
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      {isEditing ? (
        <input
          className="ml-[10px] h-[30px] w-[75%] rounded-sm px-2"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
      ) : (
        <label
          id="label-data"
          className={`ml-[10px] h-[30px] w-[75%] flex items-center overflow-hidden ${
            completed && "line-through text-gray-500"
          }`}
        >
          {text}
        </label>
      )}
      {isEditing ? (
        <button
          className="h-[30px] w-[30px] text-1xl flex justify-center items-center ml-[4px]"
          title="Save"
          onClick={handleSave}
        >
          ✅
        </button>
      ) : (
        <button
          className="h-[30px] w-[30px] text-1xl flex justify-center items-center ml-[4px]"
          title="Edit"
          onClick={() => setIsEditing(true)}
        >
          📝
        </button>
      )}
      <button
        className="h-[30px] w-[30px] text-2xl flex justify-center
        items-center ml-[4px]"
        title="Delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        ❌
      </button>
    </div>
  );
}
export default Todo;
