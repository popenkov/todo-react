import { useState, ChangeEvent, FormEvent, FC } from "react";
import style from "./TodoForm.module.css";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className={style.todoForm}>
      <input
        type="text"
        value={newTodo}
        className={style.todoInput}
        placeholder="Add a todo"
        onChange={handleChange}
      />
      <button type="submit" className={style.todoBtn} onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
