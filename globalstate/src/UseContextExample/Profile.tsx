import {useContext} from "react";
import {UserContext} from "./Main.tsx";

const Profile = () => {
    const user = useContext(UserContext)

    return <div>
        <h2>Datos del Usuario: </h2>
        <p>Nombre: {user.name}</p>
    </div>
}

export default Profile;