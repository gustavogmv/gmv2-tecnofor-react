import {ChangeEvent, createContext, useState} from "react";
import Profile from "./Profile.tsx";

export const UserContext = createContext<{ name: string }>({name: ''})

const Main = () => {

    const [user, setUser] = useState({name: ''})
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({
            name: event.target.value
        })
    }

    // below, 'contexts' will be used for sharing the 'user' defined above
    return <UserContext.Provider value={user}>
        <div>
            <Profile/>
        </div>
        <div>
            <label>Username:</label>
            <input type="text" onChange={handleChange}/>
        </div>
    </UserContext.Provider>
}

export default Main;