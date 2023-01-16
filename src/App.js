import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import logo from "../src/assets/images/LOGO-VIB-Blue.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import View from "./components/view";

function App() {
  return (
      <Router>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="navbar">
          <div className="navbar-item">
            <Link to="/read" className="nav-link">Home</Link>
            <Link to="/create" className="nav-link">Create New</Link>
         </div>
        </nav>
          <div className="main">
            <Route exact path="/create" component={Create} />
            <Route exact path="/view" component={View} />

            <Route exact path="/read" component={Read} />

            <Route path="/update" component={Update} />
          </div>
      </Router>
    
  );
}

export default App;
