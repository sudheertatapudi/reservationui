import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { trains: state.trains };
};

const trainlistConnected = ({ trains }) => {
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Train No</th>
            <th>Train Name</th>
            <th>Available Seats</th>
            <th>Departure Time</th>
          </tr>
        </thead>
        <tbody>
        {trains.map((train) => (
          <tr key={train.trainnumber}>
            <td>{train.trainnumber}</td>
            <td>{train.name}</td>
            <td>{train.available_seats}</td>
            <td>{train.departuretime}</td>
          </tr>
          
        ))}
        </tbody>
      </table>

    </div>
  );
};

const trainlist = connect(mapStateToProps)(trainlistConnected);

export default trainlist;
