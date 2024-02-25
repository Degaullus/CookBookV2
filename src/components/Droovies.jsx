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
    <div className={styles.categoryHero}>
      <h2 className={styles.title}>Droovies Recipes</h2>
      {droovies.map((recipe) => (
        <div key={recipe.fields.title} className={styles.categoryContainer}>
          <Link to={`/droovies/${recipe.fields.title}`}>
            <img
              className={styles.categoryImg}
              src={recipe.fields.image.fields.file.url}
              alt="recipe"
            />
          </Link>
          <div id={styles.foodTitleContainer}>
            <div id={styles.foodTitleContainerItem}>
              <h2 id={styles.nameOnCat}>{recipe.fields.title}</h2>
              <p id={styles.fuguIndex}>{recipe.fields.comfyFugu}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
