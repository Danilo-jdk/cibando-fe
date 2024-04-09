import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RecipeApi from "../api/recipeApi";

const DetailRecipe =  () => {
    const { id } = useParams();
    const [ ricetta, setRicetta ] = useState();

    async function onGetRecipe(){
        try {
            const idNumber = Number(id);
            const recipe = await RecipeApi.getRecipe(idNumber);
            setRicetta(recipe);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onGetRecipe();
    }, [])

    return(
        <Contenitore>
          { ricetta && (
           <>
              <div className="container-image" style={{backgroundImage: `url(${ricetta.image})`}}></div>
              <div className="container-fluid">
                  <div className="row">
                      <h2 className="title-summary">{ricetta.title}</h2>
                      <p className="description">
                          {ricetta.description}
                      </p>
                  </div>
                  <div className="row">
                      <div className="col">
                          Difficoltà {ricetta.difficulty}
                      </div>
                      <div className="col data">
                          Data {ricetta.date}
                      </div>
                  </div>
              </div>
           </>
          )}
          { !ricetta && (
            <div>caricamento in corso</div>
          )}
        </Contenitore>
    )
}

const Contenitore = styled.div `
.container-fluid{
    padding: 10px 20px ;
}
 .container-image {
    height: 450px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -19px;
    width: 100%;
 }
 .description {
    text-align: justify;
 }
 .data{
    display: flex;
    justify-content: flex-end;
 }
`

export default DetailRecipe;
