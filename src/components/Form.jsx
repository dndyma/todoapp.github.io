import TodoItem from "./TodoItem";
const Form = (props) => {
  const { item, setItem, todo, setTodo } = props;
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
    <form className="flex flex-col h-full mt-9">
      <textarea
        className="bg-slate-200 break-words ring ring-green-300 focus:outline-none focus:ring focus:ring-yellow-400 p-5 font-bold md:min-w-[200px] lg:min-w-[500px] min-h-[70px] text-xl rounded-lg shadow-md border border-1 mb-3"
        onChange={(e) => setItem(e.target.value)}
        value={item}
        placeholder="Enter Todo Item"
      />
      <button
        className="bg-green-400 rounded-lg text-white font-bold p-2 shadow-md active:bg-yellow-300"
        onClick={(e) => handleSubmit(e)}
      >
        Add
      </button>
      <TodoItem todo={todo} setTodo={setTodo} />{" "}
    </form>
  );
};

export default Form;
