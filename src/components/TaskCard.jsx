import React, {useContext} from 'react'
import{ TaskContext} from '../context/TaskContext'


function TaskCard({tar}) {

const {deleteTask} = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md ">
    <h1 className ="text-xl font-bold capitalize">{tar.title}</h1>
    <p className="text-gray-500 text-sm">{tar.description}</p>
    <button className="bg-red-500 py-1 px-2 rounded-md mt-4 hover:bg-red-700" onClick={() => deleteTask(tar.id)}>Eliminar Tarea</button>
  </div>
  )
}

export default TaskCard