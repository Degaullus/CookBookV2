import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Seriment() {
  const { recipes } = useContext(ApiContext);

  const seriments = recipes.filter(
    (seriment) => seriment.sys.contentType.sys.id === "seriment"
  );

  return (
    <div>
      <p>Vegan seriment</p>
      {seriments.map((recipe) => (
        <div key={recipe.fields.title}>
          <Link to={`/seriment/${recipe.fields.title}`}>
            <h2>{recipe.fields.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
