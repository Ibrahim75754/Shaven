
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <div className="">
     {/* <AuthProvider> */}
        <Router >
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* <PrivateRoute path="/home/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            
            
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route> */}
            <Route path="/dashBoard">
              <DashBoard></DashBoard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
