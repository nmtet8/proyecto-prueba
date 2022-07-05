import React from "react";
import { AiOutlineCloseCircle, AiOutlineHeart } from "react-icons/ai";
import "../stylesheets/Task.css";

function Task(props) {
  
  // El componente Task recibe en concreto 8 props: id (identificador que señala la posición de la tarea en el array "tasks"
  // que es la variable de estado del componente TaskList), text (el texto ingresado en el input del componente TaskForm),
  // completed (un boolean que asigna un clase que cambia el aspecto de una tarea cuando es marcada como completada),
  // favourite (boolean que indica si una tarea ha sido marcada como favorito), deleteTask (funcion que elimina una tarea), 
  // completeTask y markAsFavourite actualizan el estado de la propiedad props.completed y props.favourite
  
  
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
