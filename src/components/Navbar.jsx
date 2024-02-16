import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function NavBar(){

    return (
        <div className="navBar">
            <Logo />
            <div className="navContainer">
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="foovies">Foovies</NavLink>
            <NavLink to="droovies">Droovies</NavLink>
            <NavLink to="seriment">Seriment</NavLink>
            </div>

        </div>
    )
}