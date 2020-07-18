import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";
//REDUX
import { connect } from "react-redux";
import { getEpisodefilmCreator } from "../redux/actions/actionEpisode";

class Slide extends Component {
  constructor(props) {
    super();
    this.state = {
      props,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const { filmId } = this.state.props;
    this.props.getEpisodefilmCreator(filmId, token);
  }

  render() {
    var style = {
      width: 250,
      height: 280,
      marginTop: 10,
    };

    const { data, loading, error } = this.props;

    let linkEpisode = "";

    if (data.length > 0) {
      console.log(data);
      linkEpisode = data.map((dt, i) => (
        <Link to={`/detail/${dt.filem.id}/episode/${dt.id}`} target="blank">
          <img key={i} alt="img" style={style} src={dt.thumbnailFilem} />
          <h3 style={{ color: "white", textDecoration: "none" }}>
            {dt.filem.title} {dt.title}
          </h3>
        </Link>
      ));
    } else {
      linkEpisode = <h1>Episode empty</h1>;
    }

    return (
      <>
        {loading ? <h1 style={{ color: "white" }}>Lading</h1> : ""}
        <Carousel>{linkEpisode}</Carousel>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.getEpisodefilm;
  return {
    data,
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  getEpisodefilmCreator,
})(Slide);
