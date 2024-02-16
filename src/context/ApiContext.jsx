import {useState, createContext} from 'react'; 
import { createClient } from "contentful";
import {useEffect} from "react"; 

export const ApiContext = createContext(); 
export default function ApiContextProvider(props) {

    // create your STATE here. 
    const [recipes, setRecipes] = useState([]); 
    const client = createClient({ //Api key basicelly.
        space: "nofxc6cwgjyu",
        accessToken: "X0DJGCRBFN0dCljCfLAE39242TTYDCAgntA2h-b-_qw",
      });
      
      //let's fetch this baby 
      useEffect(() => {
        const getRecipes = async () => {
          const entryItems = await client.getEntries();
          setRecipes(entryItems.items);
          console.log(entryItems.items);
        };
        getRecipes();
      }, []);
   

    return (
        <ApiContext.Provider value= {{recipes}}>
            {props.children}
        </ApiContext.Provider>

    )
}