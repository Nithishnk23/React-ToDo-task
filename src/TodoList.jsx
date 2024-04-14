import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleStatus, deleteTask }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleStatus={toggleStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;