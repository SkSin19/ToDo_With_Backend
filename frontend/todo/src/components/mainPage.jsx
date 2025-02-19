import React, { useState } from "react";
import axios from "axios";
import "./mainPage.css";
import { useEffect } from "react";

function Main() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");


  const addTaskToDatabase = async (task) => {
    try {
      await axios.post('http://localhost:4000/api/todo', { task });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const addTask = async () => {
    if (task) {
      await addTaskToDatabase(task);
      setTasks([...tasks, { task }]);
      setTask("");
    }
  };
  
 


  const taskFetcher = async() => {       
    try {
      const tasks = await axios.get('http://localhost:4000/api/todo')

      setTasks(tasks.data)
    } catch (error) {
      console.log("error in fetching details")
    }
  }


  


  const removeTask = async (index) => {
    const taskToRemove = tasks[index];

    try {
        await axios.delete(`http://localhost:4000/api/todo/${taskToRemove._id}`); 

        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    } catch (error) {
        console.error("Error deleting task:", error);
    }
};




  useEffect(() => {
    taskFetcher();
  }, []);


  return (
    <div className="App">
      <h1>ToDo</h1>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t.task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Main