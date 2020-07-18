import React, { Component } from "react";
import AddFilm from "../component/addFilem";
import AddEpisode from "../component/addEpisode";
import "../styles/profile.css";
import Header from "../component/header";
import Foo from "../component/foooter";

class AddFilem extends Component {
  render() {
    return (
      <>
        <Header token="true" admin={true} />
        <div className="center">
          <AddFilm />
          <br />
          <AddEpisode />
          <br />
          <Foo created="Ade Hikmat Pauji Ridwan" />
        </div>
      </>
    );
  }
}
export default AddFilem;
