import {useDispatchContext, useTaskContext} from "./TaskProvider.tsx";

const TaskList = () => {
    const tasks = useTaskContext()
    const dispatch = useDispatchContext()

    return <div style={{backgroundColor: "lightseagreen"}}>
        <ul>
            {tasks && tasks.map((task) => {
                return <li>
                    <div style={{backgroundColor: "lightcoral"}}>
                        <h3>{task.title}</h3>
                        <p>{task.id}</p>
                        <p>Category: {task.category}</p>
                        <button onClick={() => {
                            dispatch && dispatch({type: 'REMOVE', data: task.id})
                        }} style={{backgroundColor:"indianred"}}>Delete
                        </button>
                    </div>
                </li>
            })}
        </ul>
    </div>
}

export default TaskList;