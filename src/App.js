import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Trainlist from "./components/trains/trainlist";
import Trainsearch from "./components/trains/trainsearch";
import BookTicket from "./components/trains/bookticket";
import FlightSearch from "./components/flights/flightsearch";
import BusSearch from "./components/buses/bussearch";
import store from "./store/index";
import { Provider } from "react-redux";
import  {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
const divStyle = {
  marginTop:'30px'
};
function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Header />

        <div className="container-fluid">

          <Switch>
            <Route exact path="/" component={Trainsearch} />
            <Route exact path="/flights" component={FlightSearch} />
            <Route exact path="/buses" component={BusSearch} />
            <Route exact path="/bookticket/:trainnumber/:trainname/:traveldate" component={BookTicket} />
          </Switch>

        </div>

      </div>
      </Router>
    </Provider>
  );
}

export default App;
