import "./App.scss";
// import { useState } from "react";
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";


// import { Label } from "@mui/icons-material";

function App() {
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
    <>
      <Header />
      <CarouselSlider />
      <div className="container-titolo">
        <h2>App di esempio</h2>
        <p className="paragrafo">Ecco il testo iniziale</p>
        {/* <h3>{pippo}</h3>
        <button className="btn btn-primary" onClick={cambiaValore}>Cambia</button>
        <div>
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
    </>
  );
}

export default App;
