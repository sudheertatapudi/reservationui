import React from "react";
import { Link } from "react-router-dom"


export default function () {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Reservation
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Trains
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/flights" className="nav-link">
              Flights
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/buses" className="nav-link">
              Buses
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-nav">
        <a href="#" className="nav-item nav-link">
          Signup
        </a>
      </div>
      <div className="navbar-nav">
        <a href="#" className="nav-item nav-link">
          Login
        </a>
      </div>
    </nav>
  );
}
