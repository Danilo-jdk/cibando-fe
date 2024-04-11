import { useState, useEffect } from "react";
import RecipeApi from "../api/recipeApi";
import styled from "styled-components";

import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
    const [ ricette, setRicette ] = useState([]);
    const [ titolo, setTitolo ] = useState('');

    async function prendiRicette() {
        try {
            const response = await RecipeApi.getRecipes();
            if(response){
               setRicette(response.sort((a,b) => b._id - a._id));
            }
        } catch (error) {
            console.log(error)
        }
    }

    function titoloDalFiglio(data) {
        if(data !== titolo){
            setTitolo(data)
        } else {
            setTitolo('');
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
        <Contenitore>
            <h2 style={{marginLeft: '20px'}}>Le nostre Ricette</h2>
            <div className="contenitore-titolo">
                { titolo && (
                    <h3 className="titolo">{titolo}</h3>
                )}
            </div>
            
            <RecipeCard ricette={ricette} nome='dan' frase='ciao' onTitoloRicevuto={titoloDalFiglio} pag='ricette'/>
        </Contenitore>
    )
}

const Contenitore = styled.div `
    .contenitore-titolo {
        height: 50px;
    }
    h3 {
        width: 100%;
        text-align: center;
        font-weight: bold;
        
    }
`
export default Recipes;