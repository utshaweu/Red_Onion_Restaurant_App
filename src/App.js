import React, { createContext, useState } from 'react';
import './Assets/css/style.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import CartDetail from './pages/CartDetail/CartDetail';
import Login from './pages/Login/Login';
import Shipment from './pages/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './pages/Contact/Contact';

export const UserContext = createContext();

function App() {

  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [shipmentForm, setShipmentForm] = useState({});

  return (
    <UserContext.Provider 
    value={{
      carts: [cart,setCart],
      login: [loggedInUser,setLoggedInUser],
      form: [shipmentForm,setShipmentForm],
    }}>
    {/* <h3>Email: {loggedInUser.email}</h3> */}
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/cart">
          <CartDetail></CartDetail>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/contact">
          <Contact></Contact>
        </PrivateRoute>
        <PrivateRoute path="/shipment">
          <Shipment></Shipment>
        </PrivateRoute>
        <Route path="/product/:id">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
