import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Crea Tu Tarea</h1>
        <input
          type="text"
          className="bg-slate-300 rounded-md p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 rounded-md p-3 w-full mb-2"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escribe la descrpcion de tu tarea"
          value={description}
        ></textarea>
        <button className="bg-green-500 text-black px-3 py-1 ml-2 hover:bg-green-400 rounded-md mx-auto">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
