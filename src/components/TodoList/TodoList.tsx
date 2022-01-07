import { FC } from "react";
import { TodoListItem } from "../TodoListItem/TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};
