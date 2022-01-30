import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <body
          style={{ fontFamily: "Quicksand, sans-serif" }}
          className="bg-main-bg min-h-screen min-w-screen relative"
        >
          <Header />

          <div className="min-h-screen">{this.props.children}</div>

          <Footer />
        </body>
      </>
    );
  }
}

export default Layout;
