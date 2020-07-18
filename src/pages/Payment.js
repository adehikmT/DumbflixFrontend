import React, { Component } from "react";
import Pay from "../component/payment";
import "../styles/profile.css";
import Header from "../component/header";
import Foo from "../component/foooter";

class Payment extends Component {
  render() {
    return (
      <>
        <Header token="true" />
        <div className="center">
          <Pay />
        </div>
        <Foo />
      </>
    );
  }
}
export default Payment;
