import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    if (document !== undefined) {
      this.element = document.createElement("div");
      this.element.id = "popup-model";
      document.body.prepend(this.element);
    }
  }

  renderModel = () => {
    console.log(">>> renderModel");
    const centerPosition = {
      position: "fixed",
      left: " 50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    };
    const { onBgClick, className } = this.props;

    return (
      <>
        <div
          className={`top-0 fixed min-h-screen min-w-full z-50 opacity-75 bg-inputLabelColour  ${className}`}
          onClick={onBgClick}
        ></div>
        <div className="absolute z-50 top-0">
          <div
            className=" max-w-4xl w-full py-7 px-8 rounded bg-white m-auto text-center"
            style={centerPosition}
          >
            <img className="w-full" src="/img/png/certified1.jpeg" />
          </div>
        </div>
      </>
    );
  };

  render() {
    return this.element ? (
      ReactDOM.createPortal(
        this.props.isOpen ? this.renderModel() : <></>,
        this.element
      )
    ) : (
      <></>
    );
  }
}

export default Popup;
