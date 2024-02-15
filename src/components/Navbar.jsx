import { NavLink } from "react-router-dom";

export default function NavBar(){

    return (
        <div>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="foovies">Foovies</NavLink>
            <NavLink to="droovies">Droovies</NavLink>
            <NavLink to="seriment">Seriment</NavLink>

        </div>
    )
}