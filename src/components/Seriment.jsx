import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

export default function Seriment() {
  const { recipes } = useContext(ApiContext);

  const seriments = recipes.filter(
    (seriment) => seriment.sys.contentType.sys.id === "seriment"
  );

  return (
    <div className={styles.categoryHero}>
      <h2 className={styles.title}>Seriment Recipes</h2>
      {seriments.map((recipe) => (
        <div key={recipe.fields.title} className={styles.categoryContainer}>
          <Link to={`/seriment/${recipe.fields.title}`}>
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
