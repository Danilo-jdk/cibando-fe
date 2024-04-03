import "./App.scss";
import { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";
import Recipes from "./pages/Recipes";


// import { Label } from "@mui/icons-material";

function App() {
  const [evidenziazione, setEvidenziazione] = useState(false);
  const bgDinamico = {
    backgroundColor: evidenziazione ? 'yellow' : 'white',
    fontSize: '50px',
    cursor: 'pointer',
    textAlign: 'left'
  }

  const onEvidenziazione = () => {
    setEvidenziazione(!evidenziazione);
  }

  // const [pippo, setPippo] = useState('ciao');
  // const [interruttore, setInterruttore] = useState(false);

  // function cambiaValore() {
  //   if(pippo === 'ciao') {
  //     setPippo('buongiorno');
  //   } else {
  //     setPippo('ciao');
  //   }
  //   // pippo === 'ciao' ? setPippo('buongiorno') : setPippo('ciao')
  //   // setPippo(pippo === 'ciao' ? 'buongiorno' : 'ciao');
  // }

  // const allievi = [
  //   {
  //     nome: 'Danilo',
  //     cognome: 'De Filio',
  //     eta: 49
  //   },
  //   {
  //     nome: 'Paolo',
  //     cognome: 'Rossi',
  //     eta: 30
  //   },
  //   {
  //     nome: 'Marco',
  //     cognome: 'Bianchi',
  //     eta: 35
  //   },
  //   {
  //     nome: 'Simone',
  //     cognome: 'Verdi',
  //     eta: 25
  //   },
  //   {
  //     nome: 'David',
  //     cognome: 'Gialli',
  //     eta: 20
  //   }
  // ]
  return (
    <Contenitore>
      <Header />
      <CarouselSlider />
      <div className="container-titolo">
        <h2 style={bgDinamico} onClick={onEvidenziazione}>Benvenuti in Cibando</h2> 
        <p className="paragrafo">Gregorio Samsa, svegliandosi una mattina da sogni agitati, si trovò trasformato, nel suo letto, in un enorme insetto immondo. Riposava sulla schiena, dura come una corazza, e sollevando un poco il capo vedeva il suo ventre arcuato, bruno e diviso in tanti segmenti ricurvi, in cima a cui la coperta da letto, vicina a scivolar giù tutta, si manteneva a fatica. Le gambe, numerose e sottili da far pietà, rispetto alla sua corporatura normale, tremolavano senza tregua in un confuso luccichio dinanzi ai suoi occhi. Cosa m’è avvenuto? pensò. Non era un sogno. La sua camera, una stanzetta di giuste proporzioni, soltanto un po’ piccola, se ne stava tranquilla fra le quattro ben note pareti. Sulla tavola, un campionario disfatto di tessuti - Samsa era commesso viaggiatore e sopra, appeso alla parete, un ritratto, ritagliato da lui - non era molto - da una rivista illustrata e messo dentro una bella cornice dorata: raffigurava una donna seduta, ma ben dritta sul busto, con un berretto e un boa di pelliccia; essa levava incontro a chi guardava un pesante manicotto, in cui scompariva tutto l’avambraccio. Lo sguardo di Gregorio si rivolse allora verso la finestra, e il cielo fosco</p>
        {/* 
        <button className="btn btn-primary" onClick={cambiaValore}>Cambia</button>
          {interruttore ? (
            <div>
              <h2>LUCE ACCESA</h2>
            </div>
          ) : (
            <div>
              <h2>LUCE SPENTA</h2>
            </div>
          )
        }

          <button style={{backgroundColor: interruttore ? 'red' : 'green'}} className="btn btn-primary" onClick={() => setInterruttore(!interruttore)}>{interruttore ? 'spegni' : 'accendi'}</button>
        </div>
        
      </div>
      { allievi.length > 0  && (
        <div>
          Attualmente ci sono {allievi.length} allievi
          { allievi.map((allievo, i) => (
              <ul key={i}>
                <li>Nome: {allievo.nome}</li>
                <li>Cognome: {allievo.cognome}</li>
                <li>Età: {allievo.eta}</li>
              </ul>
          ))}
        </div>
      )}
      { allievi.length === 0 && (
        <div> non ci sono allievi</div>
      )} */}
     </div>
     <Recipes />
    </Contenitore>
  );
}

const Contenitore = styled.div`
  background-color: white;

  h2 {
    margin-left: 10px;
  }

  p {
    width: 95%;
    margin: auto;
    text-align: justify;
  }

`

export default App;
