import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RecipeApi from "../api/recipeApi";

const DetailRecipe =  () => {
    const { id } = useParams();
    const [ ricetta, setRicetta ] = useState();
    const [ loading, setLoading ] = useState(false);
    const percorsoDifficolta = "/assets/images/difficolta-";

    async function onGetRecipe(){
        try {
            setLoading(true);
            // const idNumber = Number(id);
            const recipe = await RecipeApi.getRecipe(id);
            if (recipe) {
                setRicetta(recipe);
                setLoading(false);
            } else {
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        onGetRecipe();
    }, [])

    function etichetta(difficolta){
        let stringa;
        if(difficolta < 3){ stringa = 'facile'}
        else if(difficolta === 3 ){ stringa = 'medio'}
        else  { stringa = 'difficile'}
        return stringa;
    }


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
                          Difficoltà {etichetta(ricetta.difficulty)}
                          <div className="row">
                            <img src={percorsoDifficolta+ricetta.difficulty+'.png'} alt={ricetta.title} className="difficolta"/>
                          </div>
                      </div>
                      <div className="col data">
                          Data {ricetta.date}
                      </div>
                  </div>
              </div>
           </>
          )}
          { !ricetta && !loading && (
            <div>Spiacente la ricetta cercata non è più disponibile</div>
          )}
          { loading && (
            <div className="container-spinner">
                <div className="spinner-border text-danger" role='status'>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
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

 .difficolta {
    width: 150px;
 }
 .container-spinner {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`

export default DetailRecipe;
