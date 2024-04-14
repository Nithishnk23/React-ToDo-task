import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos([...todos, task]);
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: todo.status === 'completed' ? 'not completed' : 'completed' } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTask={addTask} />
      <TodoList todos={todos} toggleStatus={toggleStatus} deleteTask={deleteTask} />
    </div>
  );
};

export default App;