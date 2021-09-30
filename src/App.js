import Header from "./Header";
import Home from "./Home";
import Player from "./Player"
import Contact from "./Contact";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './NotFound';
import React from "react";
import data from './data.json'

export const DataContext = React.createContext();

function App() {


  return (
    <Router>
      <div className="vh-100">
        <Header title="Market" />
        <DataContext.Provider value={data}>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path="/video/:id">
              <Player />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </DataContext.Provider>
      </div>
    </Router>
  );
}

export default App;
