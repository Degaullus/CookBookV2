import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
import { HorrorComedyContext } from "../context/HorrorComedyContext";

export default function Droovies() {
  const { recipes } = useContext(ApiContext);
  const droovies = recipes.filter(
    (droovie) => droovie.sys.contentType.sys.id === "droovie"
  );
  const { isComedyTheme, comedy, horror, toggleTheme } =
    useContext(HorrorComedyContext);
  const themeStyles = isComedyTheme ? comedy : horror;
  const navigate = useNavigate();

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
            <div id={styles.foodTitleContainerItem}
                 style={{ color: themeStyles.text, background: themeStyles.uiOne }}>
              <h2 id={styles.nameOnCat}>{recipe.fields.title}</h2>
              <p id={styles.fuguIndex}>{recipe.fields.comfyFugu}</p>
            </div>
          </div>
        </div>
      ))}
      <div id={styles.containerNaviArrows}>
        <button
          style={{ color: themeStyles.text, background: themeStyles.uiOne }}
          className={styles.buttonNaviArrows}
          onClick={() => navigate("/foovies")}
        >
        ⬅️ Got to Foovies
        </button>
        <button
          style={{ color: themeStyles.text, background: themeStyles.uiOne }}
          className={styles.buttonNaviArrows}
          onClick={() => navigate("/seriment")}
        >
        Go to Seriment ➡️
        </button>
      </div>
    </div>
  );
}
