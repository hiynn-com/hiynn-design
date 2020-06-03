import React from "react";
import { Carousel } from "antd";
import axios from "axios";
import classNames from "classnames";

const returnName = "label";

const settings = {
  arrows: true,
  centerMode: false,
  className: "slider variable-width",
  dots: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  variableWidth: true
};

class HdCheckboxBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options || []
    };
  }

  componentDidMount() {
    if (this.props.url) {
      this.fetchOptions(this.props.url);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.fetchOptions(nextProps.url);
    } else if (this.props.options !== nextProps.options) {
      const options = nextProps.options || [];
      this.setState({ options }, () => {
        this.refs.carousel.goTo(0);
      });
    }
  }

  fetchOptions = url => {
    axios
      .get(url)
      .then(res => {
        if (res.data.code != 200) return;
        this.setState(
          {
            options: res.data.data.options
          },
          () => {
            this.refs.carousel.goTo(0);
            this.props.onChange &&
              this.props.onChange(
                this.state.options
                  .filter(item => item.checked)
                  .map(item => ({
                    name: returnName,
                    value: item.value
                  }))
              );
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChange = item => {
    item.checked = !item.checked;
    this.setState(
      {
        options: [...this.state.options]
      },
      () => {
        this.props.onChange &&
          this.props.onChange(
            this.state.options
              .filter(item => item.checked)
              .map(item => ({
                name: returnName,
                value: item.value
              }))
          );
      }
    );
  };

  render() {
    return (
      <div
        className="hd-checkbox-bar"
        style={{
          ...this.props.style,
          width: this.props.width,
          height: this.props.height
        }}
      >
        <Carousel ref="carousel" {...settings}>
          {this.state.options.map(item => (
            <div key={item.value}>
              <div
                className={classNames("hd-checkbox", {
                  "hd-checkbox-checked": item.checked
                })}
                onClick={() => this.onChange(item)}
              >
                <i className="hd-checkbox-icon" style={{ backgroundColor: item.icon || "transparent" }} />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default HdCheckboxBar;
