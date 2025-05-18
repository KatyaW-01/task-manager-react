import { useState } from 'react';
import "./App.css"

function App() {
  const dummyTasks = [
    {id: 1, title: "Prank Travis", description: "Stick googly eyes on all his stuff"},
    {id: 2, title: "Make a secret password app", description: "So you and your rideshare driver can both know neither one of you is lying"},
    {id: 3, title: "Learn a martial art", description: "To exact vengeance upon my enemies"}
  ];
  const [tasks, setTasks] = useState(dummyTasks); //create a piece of state called tasks, starting with the value of dummyTasks. if i want to change that value later, I'll use setTasks (a function)
  return ( 
    <main className = "App">
      <h1>Task Manager</h1> 
      <p>Hi!</p>
    </main>
  );  
}

export default App;