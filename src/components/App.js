import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selected, setSelected] = useState("All")

  function onDeleteTask(taskDelete) {
    const newTasks = tasks.filter((task) => task.text !== taskDelete.text)
    setTasks(newTasks)
  }
  
  const filteredTasks = tasks.filter((task) => selected === "All" || task.category === selected)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} handleClick={setSelected}/>
      <NewTaskForm />
      <TaskList tasks={filteredTasks} handleTaskDelete={onDeleteTask}/>
    </div>
  );
}

export default App;
