import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


export default function Seriment(){
    
    const {recipes} = useContext(ApiContext);
    console.log(recipes); 

  

    return (
        <div>
            <p>Vegan seriment</p>
            {recipes.map((recipe) => (
                <div key={recipe.fields.title}>
                   <Link to={`/seriment/${recipe.fields.title}`}>
                    <h2>{recipe.fields.title}</h2></Link>
                </div>
            ))}
        </div>
    )
}