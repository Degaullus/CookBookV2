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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

// Mothership command console OR the virgin Maria console
