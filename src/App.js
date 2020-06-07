import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Trainlist from "./components/trains/trainlist";
import Trainsearch from "./components/trains/trainsearch";
import store from "./store/index";
import { Provider } from "react-redux";

const divStyle = {
  marginTop:'30px'
};
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="container-fluid " style= {divStyle}>
         <Trainsearch/>
        </div>
        <div className="container-fluid" style= {divStyle}>
          <Trainlist />
        </div>

      </div>
    </Provider>
  );
}

export default App;
