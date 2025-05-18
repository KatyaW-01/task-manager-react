import { useState, useEffect } from 'react';
import "./App.css";
import Tasks from "../Tasks/Tasks";
import Form from "../Form/Form";
import { getTasks, postTask, deleteTask } from "../../apiCalls/apiCalls";

function App() {
  // const dummyTasks = [
  //   {id: 1, title: "Prank Travis", description: "Stick googly eyes on all his stuff"},
  //   {id: 2, title: "Make a secret password app", description: "So you and your rideshare driver can both know neither one of you is lying"},
  //   {id: 3, title: "Learn a martial art", description: "To exact vengeance upon my enemies"}
  // ];
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("")

  useEffect(()=> {
    const fetchTasks = async () => {
      try {
        const responseData = await getTasks();
        setTasks(responseData);
        setError("")
      }catch (error) {
        setError("Unable to fetch tasks")
      }
    }
    fetchTasks();
  }, []);

  async function addTask(newTask) {
    try {
      const data = await postTask(newTask);
      setTasks([...tasks, data]);
      setError("");
    } catch (error) {
      setError("Unable to create task.");
    }
  }

  async function deleteTaskById(id) {
    try {
      await deleteTask(id);
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
      setError("");
    } catch (error) {
      setError("Unable to delete task.");
    }
  }

  return ( 
    <main className="App">
      <h1>Task Manager</h1> 
      {!tasks.length && <h2>No tasks yet -- add some!</h2>}
      <Form addTask={addTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTaskById}/>
    </main>
  );  
}

export default App;