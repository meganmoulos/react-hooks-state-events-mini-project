import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [isTask, setIsTask] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("Food")

  function handleDelete(deletedTaskText){
    const newArray = isTask.filter((task) => task.text !== deletedTaskText)
    setIsTask(newArray) 
  }

  // filter function here
  function handleFilter(){
    //  const newArray = TASKS.filter((task) => task.category === "Food")
    setSelectedCategory()
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilter={handleFilter} setSelectedCategory={setSelectedCategory} category={selectedCategory} categories={CATEGORIES}/>
      <NewTaskForm />
      <TaskList tasks={isTask} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
