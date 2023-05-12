import React, { useEffect, useState } from "react";
import "./style/Style.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";


const Task = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const [filter, setFilter] = useState(false);

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setAllTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
  };

  const handleDeleteCompleteTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index);
    localStorage.setItem("completedTodos", JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedTodo = JSON.parse(localStorage.getItem("completedTodos"));
    if (savedTodo) {
      setAllTodos(savedTodo);
    }

    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);
    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setAllTodos(reducedTodo);
  };

  const handleComplete = (index) => {
    let filteredItems = {
      ...allTodos[index],
    };
    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItems);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  return (
    <div className="container">
      <div>
        <h1> Todo List </h1>
      </div>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Title"
              maxLength={50}
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Description"
              maxLength={250}
            />
          </div>
          <div className="todo-input-item">
            <button
              type="submit"
              className="primaryBtn"
              onClick={handleAddTodo}
            >
              Create Task
            </button>
          </div>
        </div>

        <div className="btn-area">
          {/* <input type="text" value= {searchTerm} onChange ={(e)=>handleSearch(e.target.value)} > */}
          <button className="secondaryBtn" onClick={(e) => setFilter(false)}>
            All
          </button>
          {/* <button className="secondaryBtn" onClick={(e) => setFilter(false)}>
            Active
          </button> */}
          <button className="secondaryBtn" onClick={(e) => setFilter(true)}>
            Completed
          </button>
          {/* <button className="secondaryBtn clear">Clear</button> */}
        </div>

        <div className="todo-list">
          {filter === false &&
            allTodos.map((item, index) => {
              return (
                <div key={index + 1} className="todo-list-item">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="icon"
                      title="Delete?"
                      onClick={() => handleDeleteTodo(index)}
                    />
                    <BsCheckLg
                      className="check-icon"
                      onClick={() => handleComplete(index)}
                      title="Complete"
                    />
                  </div>
                </div>
              );
            })}
          {filter === true &&
            completedTodos.map((item, index) => {
              return (
                <div key={index + 1} className="todo-list-item">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="icon"
                      title="Delete?"
                      onClick={() => handleDeleteCompleteTodo(index)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Task;
