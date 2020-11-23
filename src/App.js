import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.js";
<<<<<<< HEAD
import Login from "./Components/Login.js";
import About from "./Components/About.js";
import Home from "./Components/Home.js";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
function App() {
=======
import Home from './Home';
import SearchResults from './SearchResults';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App()  {
>>>>>>> f18cc12b0684f6b0afe75d31948d32c42a9843a6
  return (

    <div className = "app">
    <Router>

      <Navbar />

      <Switch>
<<<<<<< HEAD
        <Route path ="/login">
          <Login />
        </Route>
        <Route path="/about">
          <Navbar />
          <About />
        </Route>
        <Route path="/">
          <Navbar />
=======
        <Route path = "/search">
            <SearchResults />
        </Route>
        <Route path = "/">
>>>>>>> f18cc12b0684f6b0afe75d31948d32c42a9843a6
          <Home />
        </Route>
      </Switch>

    </Router>
    </div>
  );
}


export default App;
