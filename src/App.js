import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Couleur from "./pages/Couleur"
import Region from "./pages/Region"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/couleurs" exact component={Couleur}></Route>
        <Route path="/regions" exact component={Region}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
