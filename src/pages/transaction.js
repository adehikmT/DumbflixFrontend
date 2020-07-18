import React, { Component } from "react";
import Table from "../component/table";
import Header from "../component/header";
import Foo from "../component/foooter";

class Payment extends Component {
  render() {
    return (
      <>
        <Header token="true" admin={true} />
        <div style={{ marginTop: 100 }}>
          <Table />
        </div>
        <Foo />
      </>
    );
  }
}
export default Payment;
