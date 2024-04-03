import { useState, useEffect } from "react";
import RecipeApi from "../api/recipeApi";

const Recipes = () => {
    const [ ricette, setRicette ] = useState([]);

    async function prendiRicette() {
        try {
            const response = await RecipeApi.getRecipes();
            if(response){
               setRicette(response);
            }
        } catch (error) {
            console.log(error)
        }
    }

    //  useEffect all'avvio del componente
useEffect(() => {
    console.log('sei entrato nel componente')
    prendiRicette();

    return () => {
        console.log('sei uscito dal componente');
        setRicette([]);
    }
}, [])


useEffect(() => {
    if(ricette.length > 1) {
        console.log('hai ricevuto le ricette dal server');
        console.log(ricette);
    }
}, [ricette])


    return (
        <div>Ricette</div>
    )
}

export default Recipes;