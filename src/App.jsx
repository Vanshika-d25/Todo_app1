import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import { useState } from "react";
import WelcomMsg from "./components/WelcomeMsg";

function App() {


  const [todoItems, setTodoItems]=useState([]);
 const handleNewItem=(itemName, itemDueDate )=>
  {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems=[...todoItems,{name: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems= todoItems.filter(item=>item.name!== todoItemName);
    setTodoItems(newTodoItems);

  }

  return (
    <Container>
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 &&<WelcomMsg todoItems={todoItems}></WelcomMsg>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </Container>
  );
};

export default App;
