import {ApiContext} from "../context/ApiContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function SerimentRecipe() {


    const {title} = useParams()

 /*    const urlTitle = unescape(title) */ 
    const {recipes} = useContext(ApiContext);

    const recipe = recipes.find((selectedDish) => decodeURIComponent(selectedDish.fields.title) == title)//using decodeURIComponent allows to read the url without the20% (GPT)

    console.log(recipe) 

    return (
        <div>

            <h1>{recipe.fields.title}</h1>

        </div>
    )
}

