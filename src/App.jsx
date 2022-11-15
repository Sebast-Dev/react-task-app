import { useState, useEffect } from "react";
import { tasks as data, tasks } from "./data/Tasks";
import { TaskList } from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export function App() {

  return (
    <div className=" bg-zinc-900 h-screen ">
     <div className="container mx-auto p-10">
     <TaskForm  />
      <TaskList  />
     </div>
    </div>
  );
}
