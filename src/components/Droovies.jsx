import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

export default function Droovies() {
  const { recipes } = useContext(ApiContext);

  const droovies = recipes.filter(
    (droovie) => droovie.sys.contentType.sys.id === "droovie"
  );

  return (
    <div>
      <h2 className={styles.title}>Droovies Recipes</h2>
      {droovies.map((recipe) => (
        <div key={recipe.fields.title} className={styles.categoryContainer}>
          <Link to={`/droovies/${recipe.fields.title}`}>
            <h2>{recipe.fields.title}</h2>
            <img
              className={styles.categoryImg}
              src={recipe.fields.image.fields.file.url}
              alt="recipe"
            />
          </Link>
          <p>{recipe.fields.fugu}</p>
        </div>
      ))}
    </div>
  );
}
