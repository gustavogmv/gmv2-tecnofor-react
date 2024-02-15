import {Link, NavLink} from "react-router-dom";

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
            <li><Link to={"/about"}>About Me</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/admin"}>Admin Zone</Link></li>
            <li><Link to={"/admin/lists"}>Admin Lists</Link></li>
            <li><Link to={"/register"}>Register</Link></li>
        </ul>
    </nav>
}

export default NavBar;