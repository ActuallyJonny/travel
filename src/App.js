import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.js";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route to="/">
          <Navbar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
