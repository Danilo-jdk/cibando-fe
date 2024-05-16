import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { AuthProvider} from "./auth/AuthContext";
import { ProtectedRoutes } from "./auth/ProtectedRoutes";
import { ProtectedRoutesUser } from "./auth/ProtectedRoutesUser";

import Header from "./components/Header";

// Pagine
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailRecipe from "./pages/DetailRecipe";
import RegistrationUser from "./pages/RegistrationUser";
import Login from "./pages/Login";
import NewRecipe from "./pages/NewRecipe";
import Profile from "./pages/Profile";

function App() {

  return (
    <UserProvider>
            <Router>
              <AuthProvider>
                    <Header></Header>
                    <Routes>
                        <Route  path="/" element={<Home />}/>
                        <Route  path="/home" element={<Home />}/>
                        <Route  path="/ricette" element={<Recipes />}/>
                        <Route  path="/dettaglio/:title/:id" element={<DetailRecipe />}/>
                        <Route  path="/registrazione" element={<RegistrationUser />}/>
                        <Route path="/login" element={<Login />} />
                        <Route path="/nuova-ricetta" element={ 
                            <ProtectedRoutes>
                                <NewRecipe />
                            </ProtectedRoutes>
                        } />
                        <Route path="/profilo" element={
                          <ProtectedRoutesUser>
                              <Profile />
                          </ProtectedRoutesUser>
                        } />
                    </Routes>
              </AuthProvider>
            </Router>
    </UserProvider>
  
  );
}

export default App;
