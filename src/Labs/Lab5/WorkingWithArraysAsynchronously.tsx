import React, { useState, useEffect } from "react";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };

  const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };

  const postTodo = async () => {
    const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false });
    setTodos([...todos, newTodo]);
  };

  const updateTodo = async (id: number, title: string, completed: boolean) => {
    const updatedTodos = await client.updateTodo(id, title, completed);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>
        Todos
        <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3" id="wd-create-todo" />
        <FaPlusCircle onClick={postTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
      </h4>
      <input
        type="text"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        placeholder="New Todo Title"
      />
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
            />
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={todo.completed}
              onChange={(e) => updateTodo(todo.id, todo.title, e.target.checked)}
            />
            <input
              type="text"
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value, todo.completed)}
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
