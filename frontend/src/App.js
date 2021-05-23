import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import FooterContainer from "./components/Footer/FooterContainer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import OrderListScreen from "./screens/OrderListScreen";
import About from "./screens/About";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />

          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/about" component={About} exact />
        </Container>
      </main>
      <FooterContainer />
    </Router>
  );
};

export default App;
