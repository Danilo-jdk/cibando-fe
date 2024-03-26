import "./App.scss";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';

import { useState } from "react";

import Logo from './assets/images/icona-cibando.png';

function App() {
  const [pippo, setPippo] = useState('ciao');
  const [interruttore, setInterruttore] = useState(false);

  function cambiaValore() {
    if(pippo === 'ciao') {
      setPippo('buongiorno');
    } else {
      setPippo('ciao');
    }

    // pippo === 'ciao' ? setPippo('buongiorno') : setPippo('ciao')

    // setPippo(pippo === 'ciao' ? 'buongiorno' : 'ciao');

  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-red navbar-dark">
          <div className="container-fluid">
            <img src={Logo} className="icona-cibando" />
            <a className="navbar-brand" href="#">
              Cibando
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                   <HomeIcon>Filled</HomeIcon> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <MenuBookIcon>Filled</MenuBookIcon> Ricette
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                   <MarkAsUnreadIcon>Filled</MarkAsUnreadIcon> Contatti
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container-titolo">
        <h2>App di esempio</h2>
        <p className="paragrafo">Ecco il testo iniziale</p>
        <h3>{pippo}</h3>
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
    </>
  );
}

export default App;
