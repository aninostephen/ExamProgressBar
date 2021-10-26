import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import ProgressBar from "./ProgressBar";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topImg:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      barImg:
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg",
      minValue: 1,
      MaxValue: 100,
      stopValue: 100,
      processingTime: 2000,
      repeatable: false,
      repeatTimes: 0,

      wTemp: 0,
      isSubmitted: false,
      isReset: false,
    };
  }

  handleEventChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onCreateBtn = (e) => {
    e.preventDefault();

    if (this.state.minValue > this.state.MaxValue) {
      this.setState({
        minValue: 1,
      });
    }
    this.setState({ isSubmitted: true });
  };

  resetBtn = (e) => {
    window.location.reload(false);
  };

  render() {
    return (
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row">
          <div className="col-sm-4">
            <h4>Form</h4>
            <form>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Top Images:</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="topImg"
                    value={this.state.topImg}
                    onChange={this.handleEventChange}
                    className="form-control topImg"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Bar Images:</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="barImg"
                    onChange={this.handleEventChange}
                    value={this.state.barImg}
                    className="form-control barImg"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Min Value:</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="minValue"
                    onChange={this.handleEventChange}
                    value={this.state.minValue}
                    className="form-control minValue"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Max Value:</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="MaxValue"
                    onChange={this.handleEventChange}
                    value={this.state.MaxValue}
                    className="form-control MaxValue"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Stop Value:</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="stopValue"
                    onChange={this.handleEventChange}
                    value={this.state.stopValue}
                    className="form-control stopValue"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">
                  Processing Time:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="processingTime"
                    onChange={this.handleEventChange}
                    value={this.state.processingTime}
                    className="form-control processingTime"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Repeatable:</label>
                <div className="col-sm-10">
                  <select
                    name="repeatable"
                    onChange={this.handleEventChange}
                    value={this.state.repeatable}
                    className="form-control"
                  >
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Repeat Times:</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="repeatTimes"
                    onChange={this.handleEventChange}
                    value={this.state.repeatTimes}
                    className="form-control repeatTimes"
                  />
                </div>
              </div>

              <button type="button" onClick={this.onCreateBtn}>
                Save and Test
              </button>
              <button type="button" onClick={this.resetBtn.bind(this)}>
                Reset
              </button>
            </form>
          </div>
          {this.state.isSubmitted && (
            <div className="col-sm-8" style={{ backgroundColor: "#eee" }}>
              <ProgressBar data={this.state} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
