import RECIPES from "../mocks/recipes-mock";

async function getRecipes() {
    try {
        const response = await RECIPES;
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getRecipe = async (id) => {
    try {
        const response = await RECIPES.find(ricetta => ricetta._id ===  id);
        return response;
    } catch (error) {
        console.log(error)
    }
}


const RecipeApi = {
    getRecipes: getRecipes,
    getRecipe: getRecipe
}

export default RecipeApi;