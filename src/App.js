import Button from "./Button";
import styles from "./App.module.css"
import {useState,useEffect} from "react"
import Movie from "./components/Movie"
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from "react-router-dom";


function App() {
  return ( <Router>
    <Switch>
    <Route path= "/movie/:id" >
      <Detail />
    </Route>
    <Route path = "/">
      <Home />
    </Route>
    </Switch>
    </Router>
    );
  }
export default App;
