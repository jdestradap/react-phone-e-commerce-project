import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import ReactGA from 'react-ga';

class App extends Component {
  render() {
    initializeReactGA()
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
function initializeReactGA() {
  ReactGA.initialize('UA-150811579-1');
  // ReactGA.pageview('/homepage');
  // history.listen(location => ReactGA.pageview(location.pathname));
}
export default App;
