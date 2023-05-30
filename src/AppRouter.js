import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Inicio from './Pages/Inicio/Pages';
import Busqueda from './Pages/Busqueda/Pages';
import NuevoRestaurante from './Pages/NuevoRestaurante/Pages';
import { Switch } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/busqueda" component={Busqueda} />
        <Route path="/nuevo-restaurante" component={NuevoRestaurante} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
