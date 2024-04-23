import "./App.scss";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import Header from "./components/Header";

// Pagine
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailRecipe from "./pages/DetailRecipe";
import RegistrationUser from "./pages/RegistrationUser";

function App() {

  return (
    <UserProvider>
            <Router>
                    <Header />
                    <Routes>
                        <Route  path="/" element={<Home />}/>
                        <Route  path="/home" element={<Home />}/>
                        <Route  path="/ricette" element={<Recipes />}/>
                        <Route  path="/dettaglio/:title/:id" element={<DetailRecipe />}/>
                        <Route  path="/registrazione" element={<RegistrationUser />}/>
                    </Routes>
                </Router>
    </UserProvider>
  
  );
}

export default App;
