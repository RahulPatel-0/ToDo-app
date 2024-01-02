import { useState } from "react";

function AddTodo({onNewItem}) {
  const [todoName,settodoName]=useState('');
  const [dueDate,setdueDate]=useState('');

  const handleNameChange=(event)=>{
    settodoName(event.target.value);

  }
  const handleDateChange=(event)=>{
    setdueDate(event.target.value);
    
  }
  const handleAddButton=()=>{
    onNewItem(todoName,dueDate);
    setdueDate(" ");
    settodoName(" ");


  }



  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" 
          value={todoName}
          onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date"
          value={dueDate} 
          
          onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
          onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;