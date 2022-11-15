import React, { createContext, useEffect, useState } from "react";
import { tasks as data, tasks } from "../data/Tasks";


export const TaskContext = createContext();

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);
  const [desc, setDesc] = useState("");



  function createTask(taskTitle, desc) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: desc,
      },
    ]);
  }


  function deleteTask(taskId){
  setTasks(tasks.filter (tasks => tasks.id !== taskId)) 
    }

    useEffect(() => {
      setTasks(data);
      setDesc(desc);
    }, []);

  return (
    <TaskContext.Provider value={{
tasks,
createTask,
deleteTask
    }}>
      {props.children}</TaskContext.Provider>
  );
}
