import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Item.module.css";
import { Circles } from 'react-loader-spinner';

export default function DrooviesRecipe() {
  const { title } = useParams();

  /*    const urlTitle = unescape(title) */
  const { recipes } = useContext(ApiContext);

  const recipe = recipes.find(
    (selectedDish) => decodeURIComponent(selectedDish.fields.title) == title
  ); //using decodeURIComponent allows to read the url without the20% (GPT)
  if (!recipe) {
    // Data is not yet available, you can render a loading message or return null
    return <Circles
    height="1200"
    width="1200"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />;
  }

 
  console.log(recipe); 
  return (
    <div>
      <h1 className={styles.title}>{recipe.fields.title}</h1>
      <h2>{recipe.fields.subtitle}</h2>
      <h2>{recipe.fields.comfyFugu}</h2>
      <h3>{recipe.fields.time}</h3>
      <img src={recipe.fields.image.fields.file.url} alt="" />
      <pre>{recipe.fields.ingredients}</pre>
      <p>{recipe.fields.preparation}</p>
      <img src={recipe.fields.sourceImg.fields.file.url} alt={recipe.fields.sourceImg.fields.title} />
      <h4>{recipe.fields.source}</h4>
      <p>{recipe.fields.sourceSub}</p>
    </div>
  );
}
