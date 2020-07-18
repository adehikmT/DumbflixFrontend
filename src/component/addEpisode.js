import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// REDUX
import { connect } from "react-redux";
import { getAllfilmCreator } from "../redux/actions/actionFilm";
import { postEpisodeCreator } from "../redux/actions/actionEpisode";

class AddEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episode: {},
    };
  }

  componentDidMount() {
    this.props.getAllfilmCreator();
  }

  handleChange = (event) => {
    const { episode } = this.state;
    this.setState({
      episode: { ...episode, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    await this.props.postEpisodeCreator(this.state.episode, token);
    this.setState({ episode: {} });
  };

  render() {
    var fon = {
      color: "white",
      fontWight: 10,
      marginBottom: 5,
    };
    var err = {
      color: "red",
      fontWight: 8,
      marginBottom: 5,
    };
    var ok = {
      color: "green",
      fontWight: 8,
      marginBottom: 5,
    };
    var styl1 = {
      color: "white",
      border: 3,
      backgroundColor: "#1F1F1F",
      borderColor: "white",
      width: 475,
      height: 35,
      marginBottom: 10,
      marginTop: 8,
    };

    const {
      data,
      loading,
      error,
      loadingPost,
      dataPost,
      errorPost,
    } = this.props;
    const info = loading ? "Loading..." : error ? error : "Film";
    // POSTEPISODE
    const insert = loadingPost ? "Loading..." : errorPost ? errorPost : "";
    const success =
      dataPost.length === 0
        ? ""
        : dataPost.title
        ? "Success Inserted " + dataPost.title
        : "";
    // Film LOADED
    const film =
      data.length > 0
        ? data.map((film, i) => (
            <option key={i} value={film.id}>
              {film.title}
            </option>
          ))
        : "";

    const { episode } = this.state;

    return (
      <>
        <div style={fon}>Add Episode</div>
        <div>
          <span style={err}>{insert}</span>
          <span style={ok}>{success}</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <select name="filemId" style={styl1} onChange={this.handleChange}>
            <option>{info}</option>
            {film}
          </select>
          <div>
            <input
              type="text"
              placeholder="title"
              style={styl1}
              name="title"
              value={episode.title ? episode.title : ""}
              onChange={this.handleChange}
            />
            <br></br>
            <input
              type="text"
              placeholder="thumbnailFilem"
              style={styl1}
              name="thumbnailFilem"
              value={episode.thumbnailFilem ? episode.thumbnailFilem : ""}
              onChange={this.handleChange}
            />
            <br></br>
            <input
              type="text"
              placeholder="link film"
              style={styl1}
              name="linkFilem"
              value={episode.linkFilem ? episode.linkFilem : ""}
              onChange={this.handleChange}
            />
            <br></br>
          </div>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: 470, marginTop: 7, marginRight: 10 }}
            type="submit"
          >
            +
          </Button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.getAllfilm;
  const {
    data: dataPost,
    loading: loadingPost,
    error: errorPost,
  } = state.postEpisode;
  return {
    data,
    loading,
    error,
    dataPost,
    loadingPost,
    errorPost,
  };
};

export default connect(mapStateToProps, {
  getAllfilmCreator,
  postEpisodeCreator,
})(AddEpisode);
