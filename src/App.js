import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./components/Footer.css";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header/>
          <Switch>
            <Route exact path={"/"} component={About}/>
            <Route exact path={"/about"} component={About}/>
            <Route exact path={"/portfolio"} component={Portfolio}/>
            <Route exact path={"/contact"} component={Contact}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
