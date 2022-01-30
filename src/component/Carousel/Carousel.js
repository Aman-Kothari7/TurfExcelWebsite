import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class CarouselGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Carousel {...this.props}>{this.props.children}</Carousel>;
  }
}

export default CarouselGroup;
