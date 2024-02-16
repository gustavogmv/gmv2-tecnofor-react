import './App.css'
import Main from "./UseContextExample/Main.tsx";
import ListaCompra from "./UseReduceExample/ListaCompra.tsx";
import TaskProvider from "./TasksExample/TaskProvider.tsx";
import NewTask from "./TasksExample/NewTask.tsx";
import TaskList from "./TasksExample/TaskList.tsx";

function App() {

    return (
        <>
            <Main/>
            <ListaCompra/>

            <TaskProvider>
                <NewTask />
                <TaskList />
            </TaskProvider>
        </>
    )
}

export default App
