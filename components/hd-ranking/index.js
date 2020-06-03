import axios from "axios";
import React, { Component } from "react";

class HdRanking extends Component {
  constructor(props) {
    super(props);
    console.log(props.url);
    this.state = {
      data: this.props.data,
      showTop: this.props.showTop,
      corner: this.props.corner
    };
  }
  componentWillMount() {
    console.log(this.props.url);
    if (this.props.url) {
      axios
        .get(this.props.url)
        .then(response => {
          this.setState(
            {
              data: response.data.data.data
            },
            () => {
              // console.log(this.state.data);
            }
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.url) {
      axios
        .get(nextProps.url)
        .then(response => {
          this.setState(
            {
              data: response.data.data.data
            },
            () => {
              // console.log(this.state.data);
            }
          );
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      if (nextProps.data) {
        this.setState({
          data: nextProps.data
        });
      }
    }

    if (nextProps.showTop) {
      this.setState({
        showTop: nextProps.showTop
      });
    }
    if (nextProps.corner) {
      this.setState({
        corner: nextProps.corner
      });
    }
  }

  render() {
    let { data, style, showTop, corner, url } = this.props;

    return (
      <div className="ranking" style={style}>
        {this.state.data && this.state.data.constructor == Array && this.state.data != []
          ? this.state.data.map((item, index) => {
              return (
                <div key={index}>
                  <span style={showTop ? { width: "35%" } : { width: "50%" }} ref="rankingname" className="ranking-name">
                    {item.name} :{" "}
                  </span>
                  <span className="ranking-value">{item.value}</span>
                  {this.state.showTop ? <span className={`ranking-top ranking-top${index}`}>Top{index + 1}</span> : ""}
                </div>
              );
            })
          : ""}

        {/* {this.state.data
          ? this.state.data.map((item, index) => {
              return (
                <div key={index}>
                  <span style={showTop ? { width: "35%" } : { width: "50%" }} ref="rankingname" className="ranking-name">
                    {item.name} :{" "}
                  </span>
                  <span className="ranking-value">{item.value}</span>
                  {showTop ? <span className={`ranking-top ranking-top${index}`}>Top{index + 1}</span> : ""}
                </div>
              );
            })
          : ""} */}

        {/* 四个角样式 */}
        {this.state.corner ? <span className={"corner-top-left"}></span> : ""}
        {this.state.corner ? <span className={"corner-top-right"}></span> : ""}
        {this.state.corner ? <span className={"corner-bottom-left"}></span> : ""}
        {this.state.corner ? <span className={"corner-bottom-right"}></span> : ""}
      </div>
    );
  }
}

export default HdRanking;
