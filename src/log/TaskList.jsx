import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskList() {
    const route = useNavigate();
  const [tasks,setTasks] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const [filter,setFilter] = useState('all');
  
  const handleSearchChange =(event) =>{
    setSearchTerm(event.target.value);
  }
  const handleFilterChange =(event) =>{
    setFilter(event.target.value);
  }

  const handleToggleComplete = (taskId)=>{
    const newTasks = [...tasks];
    const index = newTasks.findIndex((tasks)=>tasks.id === taskId);
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
}

const filteredTasks = tasks.filter(task => {
    if(filter === 'all'){
        return true;
    } else if(filter === 'active'){
        return !task.completed;
    } else if(filter === 'completed'){
        return task.completed;
    }
}).filter(task => {
    const titleMatch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const descriptionMatch = task.description.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || descriptionMatch;
  });

  const handleBulkRemove = () => {
    const filteredTasks = tasks.filter(task => !task.completed);
    setTasks(filteredTasks);
  };

   const handleDetailsChange= (taskTitle) => {
       return route('/details');
   }

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search tasks"
      />
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={handleBulkRemove}>Remove Completed</button>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
                onClick={() =>handleDetailsChange(task.title)}
              />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
