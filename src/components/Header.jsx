import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function Header() {

    return (
    <div> 
        <h1>I'am a header</h1> 
        <Logo/>
        <Navbar />
        <Searchbar />
    </div>
    );
}; 

export default Header
