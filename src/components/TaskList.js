import React from "react";
import Task from './Task.js'

function TaskList({ tasks, handleDelete }) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => <Task handleDelete={handleDelete} key={task.text} text={task.text} category={task.category}/>)}
    </div>
  );
}

export default TaskList;