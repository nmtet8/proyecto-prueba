import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../stylesheets/TaskList.css";

function TaskList(props) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    task.text.trim();
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const markAsFavourite = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.favourite = !task.favourite;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} index={tasks.length}></TaskForm>
      <div className="task-list-container">
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              favourite={task.favourite}
              completeTask={completeTask}
              deleteTask={deleteTask}
              markAsFavourite={markAsFavourite}
            ></Task>
          );
        })}
      </div>
    </>
  );
}

export default TaskList;
