import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Item.module.css";
import { Circles } from "react-loader-spinner";
import { HorrorComedyContext } from "../context/HorrorComedyContext";

export default function FoovieRecipe() {
  const { title } = useParams();

  /*    const urlTitle = unescape(title) */
  const { recipes } = useContext(ApiContext);

  const recipe = recipes.find(
    (selectedDish) => decodeURIComponent(selectedDish.fields.title) == title
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

  const themeStyles = isComedyTheme ? comedy : horror;

  return (
    <div className={styles.mainRecipeContainer}>
      <div>
        <div
          style={{ color: themeStyles.text, background: themeStyles.uiOne }}
          className={styles.title}
        >
          <h1>{recipe.fields.title}</h1>
          <p className={styles.subTitle}>{recipe.fields.subtitle}</p>
        </div>
        <div
          style={{ color: themeStyles.text, background: themeStyles.uiTwo }}
          className={styles.comfyFuguContainer}
        >
          <h2 className={styles.comfyFuguText}>- SPECIAL EFFECTS -</h2>
          <p className={styles.comfyFuguRating}>{recipe.fields.comfyFugu}</p>
        </div>
      </div>

      <div>
        <div className={styles.topRecipeContainer}>
          <img
            className={styles.recipeImg}
            src={recipe.fields.image.fields.file.url}
            alt=""
          />

          <div
            style={{ color: themeStyles.text, background: themeStyles.uiTwo }}
            className={styles.containerIngredients}
          >
            <h2>Ingredients</h2>
            <pre className={styles.ingredients}>
              {recipe.fields.ingredients}
            </pre>
            <p
              style={{ color: themeStyles.text, background: themeStyles.uiOne }}
              className={styles.recipePreparationTime}
            >
              Time ⏱️
              <br /> {recipe.fields.time}
            </p>
          </div>
        </div>
        <div
          style={{ color: themeStyles.text, background: themeStyles.uiOne }}
          className={styles.preparationRecipe}
        >
          <h2 className={styles.preparationTitle}>- Preparation -</h2>
          <pre className={styles.preparationText}>
            {recipe.fields.preparation}
          </pre>
        </div>
        <div>
          <div className={styles.bottomRecipeContainer}>
            <div className={styles.sourceImageContainer}>
              <img
                className={styles.sourceImage}
                src={recipe.fields.sourceImg.fields.file.url}
                alt={recipe.fields.sourceImg.fields.title}
              />
              <div className={styles.source}>
                <h2>{recipe.fields.source}</h2>
              </div>
            </div>
          </div>
          <div
            style={{ color: themeStyles.text, background: themeStyles.uiTwo }}
            className={styles.aboutThat}
          >
            <p>{recipe.fields.aboutThat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
