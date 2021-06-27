import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Couleur from "./pages/Couleur";
import Regions from "./pages/Regions";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import {Container} from "react-bootstrap";

function App() {
  return (
      <Container>
          <Navigation />
          <BrowserRouter>
              <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/couleurs" exact component={Couleur}></Route>
                  <Route path="/regions" exact component={Regions}></Route>
                  <Route component={NotFound}></Route>
              </Switch>
          </BrowserRouter>
      </Container>

  );
}

export default App;
