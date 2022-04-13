import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from "./contexts/AuthProvider";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import MyOrders from './components/DashboardPages/MyOrders';
// import AllOrders from './components/DashboardPages/AllOrders';
// import AddPackage from './components/DashboardPages/AddPackage';
import Registration from './components/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import AllProducts from './components/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router >
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/dashBoard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            {/* <PrivateRoute path="/home/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            
            
            
            
            <Route path="*">
              <NotFound></NotFound>
            </Route> */}
            {/* <PrivateRoute  path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute  path="/allOrders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute  path="/addProduct">
              <AddPackage></AddPackage>
            </PrivateRoute> */}
            {/* 
            <PrivateRoute  path="/managePackage">
              <ManageAllPackage></ManageAllPackage>
            </PrivateRoute>
            <PrivateRoute  path="/packages/update/:id">
              <UpdatePackage></UpdatePackage>
            </PrivateRoute>
             */}
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
