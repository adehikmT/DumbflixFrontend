import React, { Component } from "react";
import { Player, BigPlayButton, ControlBar } from "video-react";
import "../styles/vidio.css";
import "video-react/dist/video-react.css";

class Vidio extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { linkFilm, thumbnailFilm } = this.props.vidio;
    const style = {
      paddingLeft: "50px",
      marginTop: "20px",
      backgroundColor: "#000000",
    };

    return (
      <div style={style}>
        <div className="vidio" style={{ backgroundColor: "#000000" }}>
          <Player
            poster={thumbnailFilm}
            height={536}
            marginTop="200px"
            width="95%"
            fluid={false}
            autoPlay={false}
          >
            <source src={linkFilm} />
            <BigPlayButton position="center" />
            <ControlBar autoHide={true} />
          </Player>
        </div>
      </div>
    );
  }
}

export default Vidio;
