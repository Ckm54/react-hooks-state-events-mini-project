import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleTaskDelete }) {
  return (
    <div className="tasks">
      { tasks.map((task) => <Task key={task.text} task={task} handleDelete={handleTaskDelete}/>)}
    </div>
  );
}

export default TaskList;
