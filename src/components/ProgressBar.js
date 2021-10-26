import React, { Component, useEffect } from "react";
import { ReactDOM } from "react-dom";

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.interval = [];
    this.state = {
      wTemp: this.props.data.minValue,
      completed: false,
    };
  }

  refresher = (e) => {
    var shuffle = 0;
    //this.setState({ wTemp: this.props.data.minValue });

    this.interval = [];
    const obj = {
      wTemp: this.props.data.minValue,
      completed: false,
    };

    this.interval = setInterval(() => {
      var shuffle = this.state.wTemp + 6;

      if (shuffle >= this.props.data.stopValue) {
        //stop value
        obj.wTemp = this.props.data.stopValue;
        this.setState(obj);
        clearInterval(this.interval);
        return;
      } else if (shuffle >= 100) {
        obj.wTemp = 100;
        this.setState(obj);
        clearInterval(this.interval);
        return;
      } else if (shuffle >= this.state.wTemp) {
        obj.wTemp = shuffle;
      } else if (this.state.wTemp === 0) {
        obj.wTemp = shuffle;
      }
      this.setState(obj);
    }, this.props.data.processingTime);
  };

  componentDidMount() {
    clearInterval(this.interval);
    this.refresher();
  }

  componentDidUpdate() {
    if (this.props.data.isReset) {
      this.setState({ wTemp: this.props.data.minValue });
    } else {
      this.refresher();
    }
  }

  render() {
    return (
      <div>
        <div>
          <div
            style={{
              backgroundImage: `url(${
                this.props.data.barImg ? this.props.data.barImg : ""
              })`,
              width: this.props.data.MaxValue + "%",
              height: 300,
              backgroundColor: "#ffffff",
              marginTop: "4%",
            }}
            className="progressbar"
          >
            <div
              className="inner"
              style={{
                backgroundImage: `url(${
                  this.props.data.topImg ? this.props.data.topImg : ""
                })`,
                backgroundSize: "cover",
                width: this.state.wTemp + "%",
                backgroundColor: "#eeeeee",
                height: "100%",
                border: "3px solid #ffffff",
              }}
            ></div>
            <div>{this.state.wTemp + "%"}</div>
          </div>
        </div>
      </div>
    );
  }
}
