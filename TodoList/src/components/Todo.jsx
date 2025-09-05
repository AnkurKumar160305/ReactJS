import React, { useState,useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import Task from "./Task";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    const text = prompt("Enter task description:");
    if (!text) return;

    const isChecked = window.confirm("Mark as done?");

    const newTask = { id: Date.now(), text, done: isChecked };
    setTasks([...tasks, newTask]);
  };

  const handleAll = () => setFilter("all");
  const handleDone = () => setFilter("done");
  const handleNotDone = () => setFilter("not-done");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "not-done") return !task.done;
    return true; // all
  });


  const handleEdit = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    if (!taskToEdit) return;

    const newText = prompt("Enter new task description:");
    if (!newText) return;
    const isChecked = window.confirm("Mark as done?");

    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText, done: isChecked } : task
    ));
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <h1>Todo List</h1>
      <div className="container">
        <div className="head">
          <h2 className="left-head">Tasks</h2>
          <div className="right-head">
            <button className="all" onClick={handleAll}>
              All
            </button>
            <button className="done" onClick={handleDone}>
              Done
            </button>
            <button className="not-done" onClick={handleNotDone}>
              Not done
            </button>
            <FaFilter className="filter-img" />
          </div>
        </div>

        <div className="tasks-list">
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} onEdit={handleEdit} onDelete={handleDelete}/>
          ))}
        </div>
        <button className="add-task" onClick={handleAddTask}>
          <p className="plus">+</p>
          <p className="add-text">Add Task</p>
        </button>
      </div>
    </>
  );
};

export default Todo;
