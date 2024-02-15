import {Link} from "react-router-dom";

const NavBar = () => {
    return <nav>
        <ul>
            {/*<li>*/}
            {/*    <a href ....*/}
            {/*</li>*/} {/*----> NEVER, NEVER do this*/}
            <li><Link to={"/info"}>Information</Link></li>
            <li><Link to={"/about"}>About Me</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/admin"}>Admin Zone</Link></li>
            <li><Link to={"/admin/lists"}>Admin Lists</Link></li>
            <li><Link to={"/register"}>Register</Link></li>
        </ul>
    </nav>
}

export default NavBar;