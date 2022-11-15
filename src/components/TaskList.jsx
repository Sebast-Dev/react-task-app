import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'
import {useContext} from "react"


export function TaskList() {

const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-4xl font-bold text-white mb-3 mx-au text-center ">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((tar) => (
        // el metodo map aqui en JSX se utiliza, en la funcion flecha, con parentesis o sin ellos pero NO con llaves :)
       <TaskCard  key={tar.id} tar={tar}/>
      ))}
    </div>
  );
}
