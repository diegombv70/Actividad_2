import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Busqueda from './Busqueda';
import NuevoRestaurante from './NuevoRestaurante';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/busqueda">Búsqueda de restaurantes</Link>
            </li>
            <li>
              <Link to="/nuevo">Nuevo restaurante</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/busqueda">
            <Busqueda />
          </Route>
          <Route path="/nuevo">
            <NuevoRestaurante />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
