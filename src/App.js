import Header from "./Header";
import Home from "./Home";
import Player from "./Player"
import Contact from "./Contact";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import NotFound from './NotFound';
import React from "react";
import data from './data.json'

export const DataContext = React.createContext();

function App() {


  return (
    <HashRouter>
      <div className="bg-secondary min-vh-100">
        <Header title={data.brandname} />
        <div className="p-2"></div>
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
    </HashRouter>
  );
}

export default App;
