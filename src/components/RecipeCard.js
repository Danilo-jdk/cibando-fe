import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./modal";
import { Pagination } from "@mui/material";

const RecipeCard = (props) => {
    const [open, setOpen] = useState(false);
    const [titolo, setTitolo ] = useState('');
    const [paginaCorrente, setPaginaCorrente] = useState(1)

    const [ricettePerPagina, setRicettePerPagina ] = useState(4);
    const indiceUltimaRicetta = paginaCorrente * ricettePerPagina;
    const indicePrimaRicetta = indiceUltimaRicetta - ricettePerPagina;
    const ricetteCorrenti = props.ricette.slice(indicePrimaRicetta, indiceUltimaRicetta);
    const numeroPagine = Math.ceil(props.ricette.length / ricettePerPagina);

    const ricette = props.ricette;

    const cambiaPagina = (evento, valore) => {
        setPaginaCorrente(valore)
    }
    const handleSetNumber = (event) => {
        setRicettePerPagina(event.target.value);
    }
    const accorciaDescrizione = (descrizione) => {
        const lunghezzaMassima = 170;

        if (descrizione.length <= lunghezzaMassima){
            return lunghezzaMassima
        } else {
            const posizioneUltimoSpazio = descrizione.indexOf(' ', lunghezzaMassima);
            return posizioneUltimoSpazio;
        }
    }

    function inviaTitolo(titolo){
        console.log('titolo da inviare ' + titolo)
        if (props.pag === 'ricette') {
            props.onTitoloRicevuto(titolo); // richiamando la funzione di callback nel comp padre
        }
        setTitolo(titolo);
        apriModale();
    }

    const apriModale = () => {
        setOpen(true)
      }
    
      const chiudiModale = () => {
        setOpen(false);
      }

      useEffect(() => {
        if(indicePrimaRicetta > ricette.length) {
            setPaginaCorrente(paginaCorrente-1)
        }
      }, [indicePrimaRicetta])
  return (
    <Contenitore>
     {props.pag === 'ricette' && 
        <>
                <div>
                Ricette visualizzate da { indicePrimaRicetta + 1 } a { ricetteCorrenti.length < ricettePerPagina ? indicePrimaRicetta + ricetteCorrenti.length : indiceUltimaRicetta } su un totale di {ricette.length} ricette
                   
                   <div>
                    Ricette visualizzate: 
                   </div>
                    <select onChange={handleSetNumber}>
                        <option value={4}>4</option>
                        <option value={6}>6</option>
                        <option value={8}>8</option>
                    </select> 
                </div>
        </>
     }
        { ricetteCorrenti.map((ricetta, index) => (
            <div className="container-card" key={index}>
                <div className="card">
                    <div className="card-image" style={{backgroundImage:`url(${ricetta.image})` }} onClick={() => inviaTitolo(ricetta.title)}></div>

                    <div className="card-body">
                        <h5 className="card-title">{ricetta.title}</h5>
                        <p className="card-text">
                            {ricetta.description.slice(0, accorciaDescrizione(ricetta.description))} ...
                        </p>
                        <Link to={`/dettaglio/${ricetta.title}/${ricetta._id}`}>
                            <button className="btn btn-primary">Visualizza</button> 
                        </Link>
                    </div>
                </div>
            </div>
        ))}
        {props.pag === 'ricette' && 
            (
                <div className="paginatore">
                <Pagination
                    count={numeroPagine}
                    page={paginaCorrente}
                    color="primary"
                    onChange={cambiaPagina}
                />
                </div>
            )
        }
        <Modal page='ricette' open={open} chiudiModale={chiudiModale} titolo={titolo}/>
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
