import { useState } from "react";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState({});

  const { todo, setTodo } = props;

  const handleChecked = (m) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [m]: !isChecked[m],
    }));
  };
  const handleDelete = (e, m) => {
    e.preventDefault();
    const newData = todo.filter((f) => f !== m);
    setTodo(newData);
  };
  return (
    <>
      {todo.map((m) => (
        <div
          key={m}
          className="mt-9 text-2xl shadow-xl rounded-lg overflow-hidden  p-5 border border-slate-100 flex justify-between"
        >
          <input
            type="checkbox"
            name={m}
            checked={isChecked[m] || false}
            onChange={() => handleChecked(m)}
          />
          <label
            className={`ml-9 ${isChecked[m] ? "line-through" : ""}`}
            htmlFor={m}
          >
            {m}
          </label>
          <button
            className="bg-green-400 text-white font-bold text-[20px] ml-9 px-3 py-1 rounded-lg"
            onClick={(e) => handleDelete(e, m)}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
