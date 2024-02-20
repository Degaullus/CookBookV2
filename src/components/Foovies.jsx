import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

export default function Foovies() {
  const { recipes } = useContext(ApiContext);

  const foovies = recipes.filter(
    (foovie) => foovie.sys.contentType.sys.id === "foovie"
  );

  return (
    <div>
      <h2 className={styles.title}>Foovies Recipes</h2>
      {foovies.map((recipe) => (
        <div className={styles.categoryContainer} key={recipe.fields.title}>
          <Link to={`/foovies/${recipe.fields.title}`}>
            <h2>{recipe.fields.title}</h2>
            <img
              className={styles.categoryImg}
              src={recipe.fields.image.fields.file.url}
              alt="recipe"
            />
          </Link>
          <p>{recipe.fields.comfyFugu}</p>
        </div>
      ))}
    </div>
  );
}
