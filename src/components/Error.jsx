import { useContext, useState } from "react";
import { HorrorComedyContext } from "../context/HorrorComedyContext";
export default function Error() {
  const { isComedyTheme, comedy, horror, toggleTheme } =
    useContext(HorrorComedyContext);
  const themeStyles = isComedyTheme ? comedy : horror;
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <img src="/public/errorPage.jpg" alt="Error Page"></img>
      <p style={{backgroundColor:themeStyles.uiOne,
                color:"#FFFFFF",
                border:"solid",
                borderColor:"#FFFFFF",
                borderWidth:"5px",
                borderRadius:"25px",
                margin:"1rem",
                fontSize:"1.5rem",
                padding:".5rem"}}>Error: The website you were trying to reach could not be foun on the server.</p>
    </div>
  );
}
