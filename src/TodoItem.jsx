import React from 'react';

const TodoItem = ({ todo, toggleStatus, deleteTask }) => {
  return (
    <div>
      <p>
        {todo.taskName} - {todo.description} - {todo.status}
      </p>
      <button onClick={() => toggleStatus(todo.id)}>Toggle Status</button>
      <button onClick={() => deleteTask(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;