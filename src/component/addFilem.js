import React, { Component } from "react";
import Button from "@material-ui/core/Button";

// REDUX
import { connect } from "react-redux";
import { getAllcategoryCreator } from "../redux/actions/actionCategory";
import { postFilmCreator } from "../redux/actions/actionFilm";

class Addfilem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    };
  }

  handleChange = (event) => {
    const { film } = this.state;
    this.setState({
      film: { ...film, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    await this.props.postFilmCreator(this.state.film, token);
    this.setState({ film: {} });
  };

  componentDidMount() {
    this.props.getAllcategoryCreator();
  }

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
      marginBottom: 5,
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
    // CATEGORY
    const info = loading ? "Loading..." : error ? error : "Kategory";
    // POSTCATEGORY
    const insert = loadingPost ? "Loading..." : errorPost ? errorPost : "";
    const success =
      dataPost.length === 0
        ? ""
        : dataPost.title
        ? "Success Inserted " + dataPost.title
        : "";
    // CATEGORY LOADED
    const categorys =
      data.length > 0
        ? data.map((category, i) => (
            <option key={i} value={category.id}>
              {category.name}
            </option>
          ))
        : "";
    const { film } = this.state;
    return (
      <>
        <div>
          <div style={fon}>Add Filem</div>
          <div>
            <span style={err}>{insert}</span>
            <span style={ok}>{success}</span>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="title"
              autoFocus
              style={styl1}
              value={film.title ? film.title : ""}
              onChange={this.handleChange}
            />
            <br></br>
            <input
              type="text"
              name="thumbnailFilm"
              placeholder="thumbnail"
              style={styl1}
              value={film.thumbnailFilm ? film.thumbnailFilm : ""}
              onChange={this.handleChange}
            />
            <br></br>
            <input
              type="text"
              name="linkFilm"
              placeholder="link Film"
              style={styl1}
              value={film.linkFilm ? film.linkFilm : ""}
              onChange={this.handleChange}
            />
            <br></br>
            <input
              type="text"
              name="year"
              placeholder="year"
              value={film.year ? film.year : ""}
              onChange={this.handleChange}
              style={styl1}
            />
            <br></br>
            <select
              name="categoryId"
              style={styl1}
              onChange={this.handleChange}
            >
              <option>{info}</option>
              {categorys}
            </select>
            <br></br>
            <textarea
              placeholder="description"
              name="description"
              style={{
                backgroundColor: "#1F1F1F",
                color: "white",
                width: "468px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
              onChange={this.handleChange}
            ></textarea>
            <br></br>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ width: 470, marginTop: 7, marginRight: 10 }}
              className=""
            >
              save
            </Button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.getAllcategory;
  const {
    data: dataPost,
    loading: loadingPost,
    error: errorPost,
  } = state.postFilm;
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
  getAllcategoryCreator,
  postFilmCreator,
})(Addfilem);
