import { GiHornedHelm } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  //add task
  const handleSubmit = (e) => {
    e.preventDefault();
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };
    setTasks([...tasks, addTask]);
    setInput("");
  };

  //delete task
  const deleteTask = (id) => {
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id);
    setTasks(filteredTasks);
    console.log("task deleted");
  };

  return (
    <div className="app">
      <div className="container">
        <h1>
          {" "}
          <GiHornedHelm /> PowerList
        </h1>

        <form onSubmit={handleSubmit}>
          <AiOutlinePlus />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
            type="text"
          />
        </form>
        <div>
          {tasks.map((task) => (
            <div key={task.id}>
              <p>
                {task.text}
                <button onClick={() => deleteTask(task.id)}>delete</button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
