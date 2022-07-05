import React, { useState } from "react";
import "../stylesheets/TaskForm.css";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("este es el input -->", input);
    const newTask = {
      id: props.index,
      text: input,
      completed: false,
      favourite: false,
    };
    console.log(newTask);

    props.onSubmit(newTask);

    setInput("");
  };

  return (
    <form className="task-form">
      <input
        className="task-input"
        type="text"
        placeholder="Escriba una tarea"
        name="texto"
        onChange={handleChange}
        value={input}
      />
      <button className="task-button" onClick={handleClick}>
        Agregar tarea
      </button>
    </form>
  );
}

export default TaskForm;
