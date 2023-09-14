"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, deleteTask } from "../Redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

const TodoPage = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null)

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), task: newTask }));
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }

  const handleEditTask = (input) => {
    dispatch(editTask({ id: editingTask, task: newTask }));
    setNewTask(input.task);
    setEditingTask(input.id);
  }


  const updateEditTask = () => {
    dispatch(editTask({ id: editingTask, task: newTask }));
    setEditingTask(null);
    setNewTask("");
  }; 

  return (
    <div className="flex items-center justify-center h-screen bg-sky-200">
      <div className="bg-white border-2 border-amber-400">
        <div className="pl-1.5">
          <h1>Today's To Do</h1>
        </div>
        <div className="taskInput">
          <div className="flex pl-1.5">
            <form onSubmit={handleAddTask}>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add your Task"
                className="border-none outline-none"
                required
              />
            </form>
            {editingTask === null ? (<button onClick={handleAddTask} className="pr-2">Add Task</button>) 
            : 
            (<button onClick={updateEditTask} className="pr-2">Update Task</button>)}
          </div>
          <div >
            <ul>
              {tasks.task.map((task) => (
                <li key={task.id} className="flex justify-between py-1.5 border-black border-t-2 pl-1.5">
                    {task.task}
                    <button onClick={() => handleEditTask(task)} className="mr-2.5"><FontAwesomeIcon icon={faPencil}/></button>
                    <button onClick={() => handleDeleteTask(task.id)} className="mr-2.5"><FontAwesomeIcon icon={faTrash} /></button>
                    </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;