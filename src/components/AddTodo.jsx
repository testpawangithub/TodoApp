import { useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");  we reduce code using ref  hook
  // const [dueDate, setdueDate] = useState("");
  const todoNameElement = useRef(null);
  const dueDateElement = useRef(null);
  // ====================================ref hi kar raha hai reduce code ref is importenace ===========
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setdueDate(event.target.value);
  //   console.log(`noOfUpdates are : ${noOfUpdates.current}`);
  // };

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setdueDate("");   we dont need beacuse of ref hook that do all the things.
    // setTodoName("");
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter to do here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2  pawan">
          <button
            type="button"
            className="btn btn-success Kg-button"
            onClick={handleAddButtonClick}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
