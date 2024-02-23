import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import HorrorComedyToggle from "./HorrorComedyToggle";

export default function NavBar() {
  return (
    <div className="navBar">
      <Logo />
      <div className="navContainer">
        <NavLink className="navBarLink" to="/">
          Home Page
        </NavLink>
        <NavLink className="navBarLink" to="foovies">
          Foovies
        </NavLink>
        <NavLink className="navBarLink" to="droovies">
          Droovies
        </NavLink>
        <NavLink className="navBarLink" to="seriment">
          Seriment
        </NavLink>
        <HorrorComedyToggle />
      </div>
    </div>
  );
}
