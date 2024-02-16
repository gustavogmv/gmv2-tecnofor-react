import {createContext, ReactNode, useReducer} from "react";
import {v4 as uuidv4} from "uuid";

interface Task {
    id: string;
    title: string;
    category: string;
    complete: boolean;
}

type State = Array<Task>
type Action = { type: 'ADD' | 'REMOVE', data: string }
type TaskProviderProps = { children: ReactNode }

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "ADD": {
            const arrayCopy: State = [...state]
            arrayCopy.push({id: uuidv4(), title: action.data, category: 'catn1', complete: false})
            return arrayCopy
        }
        case "REMOVE": {
            return state.filter((task) => {
                return task.id !== action.data
            })
        }
    }
}

// create Contexts
const TaskContext = createContext<State | null>(null)
const DispatchContext = createContext<React.Dispatch<Action> | null>(null)

const TaskProvider = ({children}: TaskProviderProps) => {
    const [tasks, dispatch] = useReducer(reducer, [])

    return <TaskContext.Provider value={tasks}>
        <DispatchContext.Provider value={dispatch}>
            {children}
        </DispatchContext.Provider>
    </TaskContext.Provider>
}

export default TaskProvider;