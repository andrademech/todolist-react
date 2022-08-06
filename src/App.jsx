import React, { useState } from "react";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";



const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Tarefa 01',
      completed: false,
    },
    {
      id: '2',
      title: 'Tarefa 02',
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks = {tasks}/>
      </div>

    </>
  )
}

export default App;
