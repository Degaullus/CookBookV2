import LogoFooter from "./Logo";
import Copyright from "./Copyright";
import SocialMedia from "./SocialMedia";
import ABoutUs from "./ABoutUs";

export default function Footer() {
  return (
    <div className="footer">
        <LogoFooter />
      <div className="underFooter"> 
        <Copyright />
        <div className="verticalLineFooter"></div>
      
        <ABoutUs/>
        <div className="verticalLineFooter"></div>
        <SocialMedia />
      </div>

    </div>
  );
}
