import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RecipeApi from "../api/recipeApi";

const NewRecipe = () => {
    const [ title, setTitle ] = useState('');
    const [ description, setDescrition ] = useState('');
    const [ image, setImage ] = useState('');
    const [ difficulty, setDifficulty ] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (event) => { 
        event.preventDefault();

        const dati = { title, description, image, difficulty};

        try {
            const response = await RecipeApi.insertRecipe(dati);
            if(response && response.success === true) {
                navigate('/ricette')
            } else {
                console.log('errore')
            }
        } catch (error) {
            
        }


    }
    return (
        <Contenitore>
        <form onSubmit={onSubmit} className="contenitore">
            <div>
                <label htmlFor="title" className="form-label">title: </label>
                <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
            </div>
            <div>
                <label htmlFor="description" className="form-label">description: </label>
                <textarea value={description} onChange={(e) => setDescrition(e.target.value)} className="form-control"/>
            </div>
            <div>
                <label htmlFor="image" className="form-label">image: </label>
                <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} className="form-control" />
            </div>
            <div>
                    <label htmlFor="difficulty" className="form-label">difficulty: </label>
                    <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="form-control">
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Inserisci ricetta</button>
            </div>
        </form>

    </Contenitore>
    )
}
const Contenitore = styled.div `
    .contenitore {
        border-radius: 25px;
        width: 50%;
        margin: 20px auto;
        border: 2px solid #8e210b;
        padding: 30px !important;
    }
`
export default NewRecipe;