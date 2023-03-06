import React, { useState } from "react";

function App() {

  const[inputValues, setInputValues] = useState("");
  const[toDoItems, setToDoItems] = useState([]);
  
  function handleChange(event){
    const newValue = event.target.value;
    setInputValues(newValue);
  }

  function addItem(){
    setToDoItems(prevItems => {
      return [...prevItems, inputValues];
    });
    setInputValues("");
    
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input input onChange={handleChange} type="text" value={inputValues} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoItems.map(todoItem => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
