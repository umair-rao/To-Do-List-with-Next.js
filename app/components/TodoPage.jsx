"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, deleteTask } from "../Redux/actions";

const TodoPage = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), task: newTask }));
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
              />
            </form>
            <button onClick={handleAddTask} className="pr-2">Add Task</button>
          </div>
          <div >
            <ul>
              {tasks.task.map((task) => (
                <li key={task.id} className="py-1.5 border-black border-t-2 pl-1.5">{task.task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;