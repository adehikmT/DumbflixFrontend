import React, { Component } from "react";
import Header from "../component/header";
import VidioPlay from "../component/vidioplayer";
import Detail from "../component/detailfilem";
import Foo from "../component/foooter";

// REDUX
import { connect } from "react-redux";
import { getDetailfilmCreator } from "../redux/actions/actionFilm";
import { Link } from "react-router-dom";
class Detailvidio extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    this.props.getDetailfilmCreator(this.props.match.params.id, token);
  }

  render() {
    const { data, loading, error } = this.props;

    let info = "";
    if (loading) {
      info = "Loading...";
    } else if (error) {
      info = error;
    }

    const mounting = (
      <>
        <h1
          style={{
            color: error ? "red" : "white",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          {info}
        </h1>
        {error ? (
          <h2
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 50,
            }}
          >
            {localStorage.token ? (
              <>
                Your Account is not Active . Go to{" "}
                <Link style={{ textDecoration: "none" }} to="/payment">
                  payment
                </Link>
              </>
            ) : (
              <>You Must Login</>
            )}
          </h2>
        ) : (
          ""
        )}
      </>
    );

    let vidioPlay = "";

    if (data.id) {
      vidioPlay = (
        <>
          <VidioPlay vidio={data} />
          <Detail detail={data} />
        </>
      );
    }

    return (
      <div>
        <Header />
        {data.id || error ? (
          <>
            {vidioPlay}
            {mounting}
          </>
        ) : (
          ""
        )}
        <Foo created=" DumpWays Ade" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.getDetailfilm;
  return {
    data,
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  getDetailfilmCreator,
})(Detailvidio);
