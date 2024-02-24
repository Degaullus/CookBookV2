import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Foovies from "./components/Foovies";
import Droovies from "./components/Droovies";
import Seriment from "./components/Seriment";
import SerimentRecipe from "./components/SerimentRecipe";
import Error from "./components/Error";
import Footer from "./components/Footer";
import FooviesRecipe from "./components/FooviesRecipe";
import DrooviesRecipe from "./components/DrooviesRecipe";
import { HorrorComedyContext } from "./context/HorrorComedyContext";
import { useContext, useEffect } from "react";

function App() {
  const { isComedyTheme, comedy, horror } = useContext(HorrorComedyContext);

  useEffect(() => {
    // MODIFICATION BACKGROUND BODY COLOR.  Update body background color based on the selected theme
    document.body.style.backgroundColor = isComedyTheme ? comedy.navLink : horror.navLink;

    // Cleanup effect
    return () => {
      document.body.style.backgroundColor = ""; // Restore default background color
    };
  }, [isComedyTheme, comedy.navLink, horror.navLink]);

  const themeStyles = isComedyTheme ? comedy : horror;

  return (
    <div style={{ color: themeStyles.text }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="foovies" element={<Foovies />} />
        <Route path="/foovies/:title" element={<FooviesRecipe />} />
        <Route path="droovies" element={<Droovies />} />
        <Route path="/droovies/:title" element={<DrooviesRecipe />} />
        <Route path="seriment" element={<Seriment />} />
        <Route path="/seriment/:title" element={<SerimentRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;