// import React, { useState, useEffect } from "react";
// import { tasks as data } from "./Tasks";

// // escribir: clg es = a console.log()
// // console.log(tasks)

// export function TaskList() {
//   // const [tarea, setTarea] = useState([])
//   // o podemos escribir: usestateSnippet

//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     setTasks(data);
//   }, []);

//   if (tasks.length === 0) {
//     return <h1>No hay tareas aun</h1>;
//   }

//   return (
//     <div>
//       {tasks.map((task) => {
//         <div>tarea</div>;
//       })}
//     </div>
//   );
// }
