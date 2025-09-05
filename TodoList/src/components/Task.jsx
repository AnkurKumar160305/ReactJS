import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./Todo.css";


const Task = ({task,onEdit,onDelete}) => {

  return (
    <div className={`task ${task.done ? "done" : "not-done"}`}>
      <div className="task-left">
        <input type="checkbox" className="check" checked={task.done} readOnly/>
        <input type="text" className="task-text" value={task.text} readOnly/>
      </div>
      <div className="task-right">
        <CiEdit className="edit-img" onClick={() => onEdit(task.id)}/>
        <RiDeleteBin5Line className="delete-img" onClick={() => onDelete(task.id)}/>
      </div>
    </div>
  );
};

export default Task;
