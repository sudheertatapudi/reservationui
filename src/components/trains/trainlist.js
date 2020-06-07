import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const mapStateToProps = (state) => {
  return { trains: state.trains };
};

const trainlistConnected = ({ trains }) => {

  //let history = useHistory();

  let bookTicket = (event) => {
    //alert('Book ticket');
    //history.push("/flights");
  }

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Train No</th>
            <th>Train Name</th>
            <th>Available Seats</th>
            <th>Travel Date</th>
            <th>Departure Time</th>
          </tr>
        </thead>
        <tbody>
        {trains.map((train) => (
          <tr key={train.trainnumber}>
            <td>{train.trainnumber}</td>
            <td>{train.name}</td>
            <td>{train.available_seats}</td>
            <td>{train.traveldate}</td>
            <td>{train.departuretime}</td>
            <td><NavLink to={`/bookticket/${train.trainnumber}/${train.name}/${train.traveldate}`}> Book Now </NavLink></td>
          </tr>
          
        ))}
        </tbody>
      </table>

    </div>
  );
};

const trainlist = connect(mapStateToProps)(trainlistConnected);

export default trainlist;
