import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Droovies() {
  const { recipes } = useContext(ApiContext);

  const droovies = recipes.filter(
    (droovie) => droovie.sys.contentType.sys.id === "droovie"
  );

  return (
    <div>
      <p>Droovies Recipes</p>
      {droovies.map((recipe) => (
        <div key={recipe.fields.title}>
          <Link to={`/droovies/${recipe.fields.title}`}>
            <h2>{recipe.fields.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
