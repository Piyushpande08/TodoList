import React,{useState} from "react";


const TodoList = () => {
const [todos,setTodos] = useState([]);
const [singleTodos,setSingleTodos] = useState("");

const [description,setDescription] = useState([]);
const [singleDescription,setSingleDescription] = useState("");
const handleChangeTodo =(event) =>{
  setSingleTodos(event.target.value);
}
const handleChangeDescription = (event)=>{
     setSingleDescription(event.target.value);
}

const Addtodo = (event) => {
    
}
  return (
    <div>
      <h2>Add Task</h2>
      <input type="text" onChange={handleChangeTodo}/>
      <input type="text" onChange={handleChangeDescription}/>
      <button onClick={Addtodo}>Create Task</button>
    </div>

  );
};

export default TodoList;
