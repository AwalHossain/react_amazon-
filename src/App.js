import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import OrderRiview from './components/OrderRivew/OrderRiview';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/context/AuthProvider';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div >
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route  path="/home">
          <Shop></Shop>
          </Route>
          <PrivateRouter path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRouter>

          <PrivateRouter  path="/inventory">
            <Inventory></Inventory>
          </PrivateRouter>
          <Route  path="/riview">
            <OrderRiview></OrderRiview>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
