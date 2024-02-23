import { useContext } from "react";
import { HorrorComedyContext } from "../context/HorrorComedyContext";
import styles from "./HorrorComedyToggle.module.css";

function HorrorComedyToggle() {
  
  const { isComedyTheme, comedy, horror, toggleTheme } =
  useContext(HorrorComedyContext);

const themeStyles = isComedyTheme ? comedy : horror;

  return (
    <div style={{ color: themeStyles.text, background: themeStyles.navLink }}  className={styles.themeToggle}>
      <p onClick={toggleTheme}>
        {isComedyTheme ? "Horror Mode 😱" : "Comedy Mode 🤓"}
      </p>
    </div>
  );
}

export default HorrorComedyToggle;
