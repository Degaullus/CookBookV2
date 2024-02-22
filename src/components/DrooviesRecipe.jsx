import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Item.module.css";
import { Circles } from "react-loader-spinner";

export default function DrooviesRecipe() {
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
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  console.log(recipe);
  return (
    <div className={styles.mainRecipeContainer}>
      <div>
        <h1 className={styles.title}>{recipe.fields.title}</h1>
        <h2 className={styles.subTitle}>{recipe.fields.subtitle}</h2>
        <h2 className={styles.comfyFugu}>{recipe.fields.comfyFugu}</h2>
      </div>

      <div className={styles.containerGrid}>
        <div className={styles.containerIngredients}>
          <h2>Ingredients</h2>
          <pre className={styles.ingredients}>{recipe.fields.ingredients}</pre>
        </div>

        <img
          className={styles.recipeImg}
          src={recipe.fields.image.fields.file.url}
          alt=""
        />

        <p className={styles.recipePreparationTime}>
          Preparation Time ⏱️
          <br /> {recipe.fields.time}
        </p>

        <p className={styles.preparationRecipe}>
          Preparation <br /> {recipe.fields.preparation}
        </p>

        <img
          className={styles.recipeSourceImg}
          src={recipe.fields.sourceImg.fields.file.url}
          alt={recipe.fields.sourceImg.fields.title}
        />
        <h4>{recipe.fields.source}</h4>
        <p>{recipe.fields.sourceSub}</p>
        <p>{recipe.fields.aboutThat}</p>
      </div>
    </div>
  );
}
