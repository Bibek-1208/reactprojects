import { useState } from "react";
import "./App.css";

function App() {
   const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);


     // adding a task to the list
    const addTask = () => 
        if (task==="") return;
        setTasks([...tasks, task]);
        setTask("");
    };

         // delete a task fro the list

   const deleteTask = (index) => {    
    const newTasks = task. filter((_, i) => i !== index);  //to be checked for filter or 
    setTasks(newTasks);
   };

  return (
     <div className="app">
        <h1>Todo App</h1>

        <input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((iteam, index) => (
            <li key={index}>
              {iteam} <button onClick={() => deleteTask(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
  );
        
}

export default App;