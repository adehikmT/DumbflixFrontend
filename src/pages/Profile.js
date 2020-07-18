import React, { Component } from "react";
import Prof from "../component/profile";
import "../styles/profile.css";
import Header from "../component/header";
import Foo from "../component/foooter";

class Profile extends Component {
  render() {
    return (
      <>
        <Header token="true" />
        <div className="container">
          <Prof />
        </div>
        <Foo />
      </>
    );
  }
}
export default Profile;
