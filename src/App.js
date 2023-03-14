import logo from './logo.svg';
import React from "react"
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
// import { About } from "./Components/About";
// import { Contact } from "./Components/Contact";
// import { Footer } from "./Components/Footer";
import { Products } from "./Components/Products";
import {  Product  } from "./Components/Product";
import {Router, Route, BrowserRouter} from "react-router-dom";
// import {  } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <>
    {/* <h1>Hello react</h1> */}
   
      <Header />
      <Home />
      {/* < BrowserRouter>  */}
      {/* <Router>
      
        <Route exact path="/" Components={Home} />
        <Route exact path="/products" Components={Products} />
        <Route exact path="/products/:id" Components={Product} />
        
      </Router> */}
        {/* <Home /> */}
       
      {/* </ BrowserRouter> */}
      
    </>
  );
}

export default App;
