import { useContext } from "react";
import { HorrorComedyContext } from "../context/HorrorComedyContext";
import styles from "./HorrorComedyToggle.module.css";

function HorrorComedyToggle() {
  const { isComedyTheme, toggleTheme } = useContext(HorrorComedyContext);
  return (
    <div className={styles.themeToggle}>
      <p onClick={toggleTheme}>
        {isComedyTheme ? "Horror Mode 😱" : "Comedy Mode 🥸"}
      </p>
    </div>
  );
}

export default HorrorComedyToggle;
