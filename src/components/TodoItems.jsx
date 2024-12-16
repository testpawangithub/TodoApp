import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
      {/* <TodoItem todoDate={"4/10/2023"} todoName={"Buy-Milk"}></TodoItem>
      <TodoItem todoDate={"4/10/2023"} todoName={"Go to College"}></TodoItem>  */}
    </div>
  );
};

export default TodoItems;
