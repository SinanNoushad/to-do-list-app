import React, { useState } from "react";
function Todo({ id, text, onDelete, onEdit }) {
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
        className="bg-blue-900 h-[15px] w-[15px] ml-[10px]"
        type="checkbox"
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
          className="ml-[10px] bg-green-400 h-[30px] w-[75%] flex items-center overflow-hidden "
        >
          {text}
        </label>
      )}
     {isEditing ? (
        <button
          className="h-[30px] w-[30px] text-1xl bg-green-500 flex justify-center items-center ml-[4px]"
          title="Save"
          onClick={handleSave}
        >
          ✅
        </button>
      ) : (
        <button
          className="h-[30px] w-[30px] text-1xl bg-blue-950 flex justify-center items-center ml-[4px]"
          title="Edit"
          onClick={() => setIsEditing(true)}
        >
          📝
        </button>
      )}
      <button
        className="h-[30px] w-[30px] text-2xl bg-red-200 flex justify-center
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
