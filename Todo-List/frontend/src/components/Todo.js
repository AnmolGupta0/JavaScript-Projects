import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");

  // Fetch todo list
  useEffect(() => {
    axios.get("http://localhost:3001/getTodoList")
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  // Add new todo
  const addTodo = () => {
    axios.post("http://localhost:3001/addTodoList", { task, status, deadline })
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error(error));
  };

  // Delete todo
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/deleteTodoList/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo._id}>
              <td>{todo.task}</td>
              <td>{todo.status}</td>
              <td>{todo.deadline}</td>
              <td>
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
