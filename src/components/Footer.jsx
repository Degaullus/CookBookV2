import LogoFooter from "./Logo";
import Copyright from "./Copyright";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="footer">
      <Copyright />
      <LogoFooter />
      <SocialMedia />
    </div>
  );
}
