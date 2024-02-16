import {useTaskContext} from "./TaskProvider.tsx";

const TaskList = () => {
    const tasks = useTaskContext()

    return <div style={{backgroundColor: "lightseagreen"}}>
        <ul>
            {tasks && tasks.map((task) => {
                return <li>
                    <h3>{task.title}</h3>
                    <p>{task.id}</p>
                    <p>Category: {task.category}</p>
                </li>
            })}
        </ul>
    </div>
}

export default TaskList;