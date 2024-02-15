import {NavLink} from "react-router-dom";

const isActiveLink = ({isActive}:{isActive:boolean}) => {
    return {color: isActive ? 'red' : 'black'}
}


const NavBar = () => {
    return <nav>
        <ul>
            {/*<li>*/}
            {/*    <a href ....*/}
            {/*</li>*/} {/*----> NEVER, NEVER do this*/}
            <li><NavLink to={"/info"}
                         style={isActiveLink}>Information</NavLink></li>
            <li><NavLink to={"/about"} style={isActiveLink}>About Me</NavLink></li>
            <li><NavLink to={"/contact"} style={isActiveLink}>Contact</NavLink></li>
            <li><NavLink to={"/admin"} style={isActiveLink}>Admin Zone</NavLink></li>
            <li><NavLink to={"/admin/lists"} style={isActiveLink}>Admin Lists</NavLink></li>
            <li><NavLink to={"/register"} style={isActiveLink}>Register</NavLink></li>
            <li><NavLink to={"/login"} style={isActiveLink}>Login</NavLink></li>
        </ul>
    </nav>
}

export default NavBar;