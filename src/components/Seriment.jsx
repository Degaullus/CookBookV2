import { ApiContext } from "../context/ApiContext";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
import { HorrorComedyContext } from "../context/HorrorComedyContext";

export default function Seriment() {
  const { recipes } = useContext(ApiContext);
  const seriments = recipes.filter(
    (seriment) => seriment.categ === 1
  );
  const { isComedyTheme, comedy, horror, toggleTheme } =
    useContext(HorrorComedyContext);
  const themeStyles = isComedyTheme ? comedy : horror;
  const navigate = useNavigate();


  return (
    <div className={styles.categoryHero}>
      <h2 className={styles.title}>Seriment Recipes</h2>
      {seriments?.map((recipe) => (
        <div key={recipe.id} className={styles.categoryContainer}>
          <Link to={`/seriment/${recipe.title}`}>
            <img
              className={styles.categoryImg}
              src={recipe.image}
              alt="recipe"
            />
          </Link>
          <div id={styles.foodTitleContainer}>
            <div id={styles.foodTitleContainerItem}
                 style={{ color: themeStyles.text, background: themeStyles.uiOne }}>  
              <h2 id={styles.nameOnCat}>{recipe.title}</h2>
              <p id={styles.fuguIndex}>{recipe.fuguji}</p>
            </div>
          </div>
        </div>
      ))}
      <div id={styles.containerNaviArrows}>
        <button
          style={{ color: themeStyles.text, background: themeStyles.uiOne }}
          className={styles.buttonNaviArrows}
          onClick={() => navigate("/droovies")}
        >
        ⬅️ Got to Droovies
        </button>
        <button
          style={{ color: themeStyles.text, background: themeStyles.uiOne }}
          className={styles.buttonNaviArrows}
          onClick={() => navigate("/foovies")}
        >
        Go to Foovies ➡️
        </button>
      </div>
    </div>
  );
}
