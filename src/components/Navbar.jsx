import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import HorrorComedyToggle from "./HorrorComedyToggle";
import { HorrorComedyContext } from "../context/HorrorComedyContext";
import { useContext } from "react";

export default function NavBar() {
  const { isComedyTheme, comedy, horror, toggleTheme } =
    useContext(HorrorComedyContext);

  const themeStyles = isComedyTheme ? comedy : horror;

  return (
    <div
      className="navBar"
      style={{ color: themeStyles.text, background: themeStyles.uiOne }}
    >
      <Logo />
      <div className="navContainer">
        <NavLink
          style={{ color: themeStyles.text, background: themeStyles.navLink }}
          className="navBarLink"
          to="/"
        >
          Home Page
        </NavLink>
        <NavLink
          style={{ color: themeStyles.text, background: themeStyles.navLink }}
          className="navBarLink"
          to="foovies"
        >
          Foovies
        </NavLink>
        <NavLink
          style={{ color: themeStyles.text, background: themeStyles.navLink }}
          className="navBarLink"
          to="droovies"
        >
          Droovies
        </NavLink>
        <NavLink
          style={{ color: themeStyles.text, background: themeStyles.navLink }}
          className="navBarLink"
          to="seriment"
        >
          Seriment
        </NavLink>
        <HorrorComedyToggle />
      </div>
    </div>
  );
}
