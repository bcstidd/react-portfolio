import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/projects">Projects</Link>
            &nbsp; | &nbsp;
            <Link to="/resume">Resume</Link>
            &nbsp; | &nbsp;
            <Link to="/">About Me</Link>
        </nav>
    )
}