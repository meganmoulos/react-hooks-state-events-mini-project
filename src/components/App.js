import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [isTask, setIsTask] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDelete(deletedTaskText){
    const filteredArray = isTask.filter((task) => task.text !== deletedTaskText)
    setIsTask(filteredArray) 
  }

  const visibleTasks = isTask.filter(task => task.category === selectedCategory || selectedCategory === "All")

  function handleAddTask(newTaskObj){
    setIsTask([...isTask, newTaskObj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilter={setSelectedCategory} selectedCategory={selectedCategory} categories={CATEGORIES}/>
      <NewTaskForm onFormSubmit={handleAddTask} categories={CATEGORIES.filter(cat => cat != "All")} />
      <TaskList tasks={visibleTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
