import RECIPES from "../mocks/recipes-mock";
import axios from 'axios';

const apiBaseUrl = '/api/recipes/';

// async function getRecipes() {
//     try {
//         const response = await RECIPES;
//         return response;
//     } catch (error) {
//         console.log(error)
//     }
// }

async function getRecipes() {
    try {
        const response = await axios.get(apiBaseUrl);
        if(response.status === 200) {
            console.log('risposta: ' + response.data)
            return response.data
        } else {
            throw new Error('Errore nella richiesta al server!')
        }
    } catch (error) {
        console.log(error);
    }
}


// const getRecipe = async (id) => {
//     try {
//         const response = await RECIPES.find(ricetta => ricetta._id ===  id);
//         return response;
//     } catch (error) {
//         console.log(error)
//     }
// }

const getRecipe = async (id) => {
    try {
        const response = await fetch(apiBaseUrl + id);
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error ('Errore nella chiamata al server')
        }
        
    } catch (error) {
        console.log(error)
    }
}

const RecipeApi = {
    getRecipes: getRecipes,
    getRecipe: getRecipe
}

export default RecipeApi;