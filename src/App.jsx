import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const initialtodoItems = [
    // {
    //   name: "Buy Milk",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Go to College",
    //   dueDate: "4 / 10 / 2023",
    // },
    // {
    //   name: "Like Me",
    //   dueDate: "12/10/2023",
    // },
  ];

  const [todoItems, setTodoItems] = useState([]);

  // const handleNewItem = (itemName, itemDueDate) => {
  //   console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
  //   const newTodoItems = [
  //     ...todoItems,
  //     { name: itemName, dueDate: itemDueDate },
  //   ];

  //   setTodoItems(newTodoItems);
  // };

  // COMPARE TO BELOW=====================================================

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    // ================================COMPARE TO BELOW CODE ===================
    //   setTodoItems((currValue) => {
    //     const newTodoItems = [
    //       ...currValue,
    //       { name: itemName, dueDate: itemDueDate },
    //     ];
    //     return newTodoItems;
    //   });
    // };

    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // console.log(`Item Deleted :${todoItemName}`);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-cantainer">
      <AppName />
      <p className="Welcome">hello</p>
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
