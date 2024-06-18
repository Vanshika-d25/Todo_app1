import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick}) => {
  return (
    <div className={styles.Container}>
      {todoItems.map((item) => (
        <TodoItem 
        key={item}
        todoDate={item.dueDate} 
        todoName={item.name}
        onDeleteClick={onDeleteClick}
        >

        </TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
