import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Item.module.css";
import { Circles } from "react-loader-spinner";
import { HorrorComedyContext } from "../context/HorrorComedyContext";

export default function FoovieRecipe() {
  const { title } = useParams();
  const navigate = useNavigate();

  /*    const urlTitle = unescape(title) */
  const { recipes } = useContext(ApiContext);

  const recipe = recipes.find(
    (selectedDish) => decodeURIComponent(selectedDish.title) == title
  ); //using decodeURIComponent allows to read the url without the20% (GPT)
  if (!recipe) {
    // Data is not yet available, you can render a loading message or return null
    return (
      <Circles
        height="1200"
        width="1200"
        color="#861d14"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
  const { isComedyTheme, comedy, horror, toggleTheme } =
    useContext(HorrorComedyContext);
//fuck it
  const themeStyles = isComedyTheme ? comedy : horror;

  return (
    <div className={styles.mainRecipeContainer}>
      <div>
        <div
          style={{ color: themeStyles.text, background: themeStyles.uiOne }}
          className={styles.title}
        >
          <h1>{recipe.title}</h1>
          <p className={styles.subTitle}>{rec__ipe.subtitle}</p>
        </div>
        <div
          style={{ color: themeStyles.text, background: themeStyles.uiTwo }}
          className={styles.comfyFuguContainer}
        >
          <h2 className={styles.comfyFuguText}>- SPECIAL EFFECTS -</h2>
          <p className={styles.comfyFuguRating}>{recipe.fuguji}</p>
        </div>
      </div>

      <div>
        <div className={styles.topRecipeContainer}>
          <img
            className={styles.recipeImg}
            src={recipe.image}
            alt=""
          />

          <div
            style={{ color: themeStyles.text, background: themeStyles.uiOne }}
            className={styles.containerIngredients}
          >
            <h2>Ingredients</h2>
            <pre className={styles.ingredients}>
              {recipe.ingred_list}
            </pre>
            <p
              style={{ color: themeStyles.text, background: themeStyles.uiTwo }}
              className={styles.recipePreparationTime}
            >
              Time ⏱️
              <br /> {recipe.prep_time}
            </p>
          </div>
        </div>
        <div
          style={{ color: themeStyles.text, background: themeStyles.uiOne }}
          className={styles.preparationRecipe}
        >
          <h2 className={styles.preparationTitle}>- Preparation -</h2>
          <pre className={styles.preparationText}>
            {recipe.prep_instr}
          </pre>
        </div>
        <div>
          <div className={styles.bottomRecipeContainer}>
            <div className={styles.sourceImageContainer}>
              <img
                className={styles.sourceImage}
                src={recipe.source_img}
               
              />
              <div className={styles.source}>
                <h2>{recipe.source}</h2>
              </div>
            </div>
          </div>
          <div
            style={{ color: themeStyles.text, background: themeStyles.uiTwo }}
            className={styles.aboutThat}
          >
            <p>{recipe.source_about}</p>
          </div>
        </div>
        <div className={styles.containerBackToAll}>
          <button
            style={{ color: themeStyles.text, background: themeStyles.uiOne }}
            className={styles.buttonBackToAll}
            onClick={() => navigate("/foovies")}
          >
            ⬅️ Back to all Foovies!
          </button>
        </div>
      </div>
    </div>
  );
}
