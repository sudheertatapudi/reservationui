import React from "react";

export default function () {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        Reservation
      </a>
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
            <a href="/" className="nav-link active">
              Trains
            </a>
          </li>
          <li className="nav-item">
            <a href="/flights" className="nav-link">
              Flights
            </a>
          </li>
          <li className="nav-item">
            <a href="/buses" className="nav-link">
              Buses
            </a>
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
