import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Foovies() {
  const { recipes } = useContext(ApiContext);

  const foovies = recipes.filter(
    (foovie) => foovie.sys.contentType.sys.id === "foovie"
  );

  return (
    <div>
      <h2>Foovies Recipes</h2>
      {foovies.map((recipe) => (
        <div key={recipe.fields.title}>
          <Link to={`/foovies/${recipe.fields.title}`}>
            <h2>{recipe.fields.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
