import { useState } from "react";
import Form from "./Form";
const Todo = () => {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div className="flex flex-col max-w-[800px] m-auto  justify-center align-top mb-9">
      <Form item={item} setItem={setItem} todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default Todo;
