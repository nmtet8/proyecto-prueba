import React from "react";
import { AiOutlineCloseCircle, AiOutlineHeart } from "react-icons/ai";
import "../stylesheets/Task.css";

function Task(props) {
  const defineClassName = () => {
    if (props.completed && props.favourite) {
      return "task-container favourite completed";
    } else if (props.completed) {
      return "task-container completed";
    } else if (props.favourite) {
      return "task-container favourite";
    } else {
      return "task-container";
    }
  };
  return (
    <div
      className={defineClassName()}
      onClick={() => props.completeTask(props.id)}
    >
      <div className="task-text">{props.text}</div>
      <div className="task-icon-container">
        <AiOutlineCloseCircle
          className="task-delete-icon"
          onClick={(e) => {
            e.stopPropagation();
            props.deleteTask(props.id);
          }}
        ></AiOutlineCloseCircle>
        <AiOutlineHeart
          className="task-favourite-icon"
          onClick={(e) => {
            e.stopPropagation();
            props.markAsFavourite(props.id);
          }}
        ></AiOutlineHeart>
      </div>
    </div>
  );
}

export default Task;
