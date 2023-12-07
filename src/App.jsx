import { GiHornedHelm } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false
    }
    setTasks([...tasks, addTask])
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
            <div>
              <p>{task.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
