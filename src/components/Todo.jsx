import { useState } from "react";
import TodoItem from "./TodoItem";
const Todo = () => {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.includes(item)) {
      alert("you have same value");
    } else {
      if (item === "") {
        alert("your empty ");
      } else {
        setTodo([item, ...todo]);
      }
    }
  };
  return (
    <div className="flex justify-center h-screen  ">
      <form action="" className="flex flex-col mt-10">
        <input
          className="bg-slate-200ring focus:outline-none focus:ring focus:ring-yellow-400 p-5 font-bold md:min-w-[200px] lg:min-w-[500px] min-h-[70px] text-xl rounded-lg shadow-md border border-1 mb-3"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />{" "}
        <button
          className="bg-green-400 rounded-lg text-white font-bold p-2 shadow-md"
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
        <TodoItem todo={todo} setTodo={setTodo} />{" "}
      </form>
    </div>
  );
};

export default Todo;
