import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  
  const [todoItems, settodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added ${itemName} and due date is ${itemDueDate}`);
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    settodoItems(newTodoItem);
  };

const handleDeleteItem=(TodoItemName)=>{
  const newTodoItem=todoItems.filter(item=>item.name!==TodoItemName)
  settodoItems(newTodoItem);
  console.log("Item delete "+ TodoItemName);

}




  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {/* {TodoItems.length===0 &&<WelcomeMessage ></WelcomeMessage>} */}
      <WelcomeMessage   TodoItems={todoItems}> </WelcomeMessage>
      <TodoItems TodoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
