import LogoFooter from "./Logo";
import Copyright from "./Copyright";
import SocialMedia from "./SocialMedia";
import ABoutUs from "./ABoutUs";
import { HorrorComedyContext } from "../context/HorrorComedyContext";
import { useContext } from "react";


export default function Footer() {


  const { isComedyTheme, comedy, horror, toggleTheme } =
    useContext(HorrorComedyContext);

  const themeStyles = isComedyTheme ? comedy : horror;
  
  return (
    <div className="footer" style={{ color: themeStyles.text, background: themeStyles.uiOne }}>
    {/*     <LogoFooter /> */}
      <div className="underFooter"> 
      
        <Copyright />
        <div className="verticalLineFooter"></div>
        <SocialMedia />
        <div className="verticalLineFooter"></div>
      
        <ABoutUs/>
      
     
      </div>

    </div>
  );
}
