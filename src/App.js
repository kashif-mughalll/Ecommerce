import './App.css';
import React,{useState} from "react";
import Login from "./Pages/Login/Login";
import Navbar from './Components/Navbar/Navbar'
import {Switch,Route, withRouter} from 'react-router-dom';
import Home from './Pages/Home/Home'
import Products from './Pages/Products/products'
import Footer from './Components/Footer/Footer';





var App = ()=> {

  var [ProductCart,SetProductCart] = useState([]);

  return (
    <div> 
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Auth" component={Login} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
