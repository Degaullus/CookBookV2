import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Item.module.css";

export default function FoovieRecipe() {
  const { title } = useParams();

  /*    const urlTitle = unescape(title) */
  const { recipes } = useContext(ApiContext);

  const recipe = recipes.find(
    (selectedDish) => decodeURIComponent(selectedDish.fields.title) == title
  ); //using decodeURIComponent allows to read the url without the20% (GPT)
  if (!recipe) {
    // Data is not yet available, you can render a loading message or return null
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className={styles.title}>{recipe.fields.title}</h1>
      <h2>{recipe.fields.subtitle}</h2>
      <img src={recipe.fields.image.fields.file.url} alt="" />
    </div>
  );
}
