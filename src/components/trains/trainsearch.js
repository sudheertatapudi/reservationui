import React, { Component } from "react";
import { connect } from "react-redux";
import { searchTrain } from "../../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    trainsearch: (fromstation, tostation, traveldate) =>
      dispatch(searchTrain(fromstation, tostation, traveldate)),
  };
}

class trainsearchConnect extends Component {
  constructor(props) {
    super(props);

    this.state = { fromstation: "", tostation: "", traveldate: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { fromstation, tostation , traveldate} = this.state;
    console.log(fromstation);
    console.log(tostation);
    console.log(traveldate);
    this.props.trainsearch({ fromstation }, { tostation } , { traveldate });
    this.setState({ fromstation: "", tostation: "" , traveldate:"" });
  }

  render() {
    const { fromstation, tostation, traveldate } = this.state;
    return (
      <div className="container">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="fromStation">From:</label>
            <input
              className="form-control"
              required
              type="text"
              name="fromstation"
              id="fromstation"
              value={fromstation}
              onChange={this.handleChange}
              placeholder="Enter From station"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="tostation">To:</label>
            <input
              className="form-control"
              required
              type="text"
              name="tostation"
              id="tostation"
              value={tostation}
              onChange={this.handleChange}
              placeholder="Enter To station"
            ></input>
          </div>

          <div className="form-group">
          <label htmlFor="traveldate">Travel Date:</label>
          <input 
            className="form-control"
            required 
            type="date" 
            name="traveldate" 
            id="traveldate"
            value={traveldate}
            onChange={this.handleChange} 
            >
          </input>
          </div>

          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    );
  }
}

const trainsearch = connect(null, mapDispatchToProps)(trainsearchConnect);

export default trainsearch;
