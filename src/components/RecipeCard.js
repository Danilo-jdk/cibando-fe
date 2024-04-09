import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {

    const ricette = props.ricette;

  return (
    <Contenitore>
        { ricette.map((ricetta, index) => (
            <div className="container-card" key={index}>
                <div className="card">
                    <div className="card-image" style={{backgroundImage:`url(${ricetta.image})` }} ></div>

                    <div className="card-body">
                        <h5 className="card-title">{ricetta.title}</h5>
                        <p className="card-text">
                            {ricetta.description}
                        </p>
                        <Link to={`/dettaglio/${ricetta.title}/${ricetta._id}`}>
                            <button className="btn btn-primary">Visualizza</button> 
                        </Link>
                    </div>
                </div>
            </div>
        ))}
 
    </Contenitore>
  );
};
const Contenitore = styled.div`
    background-color: white;

    .container-card {
        display: block;
        width: 23%;
        float: left;
        margin-left: 1.6%;
        margin-bottom: 20px;

        .card-image {
            height: 200px;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .card-body {
            text-align: center;

            .card-title {
                font-weight: bold;
                font-size: 18px;
                color: #8e210b
            }
            .card-text {
                font-weight: 400;
                font-size: 14px;
                color: black;
                text-align: justify;
            }
        }
    }

    
`;
export default RecipeCard;
