import React, { Component } from "react";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import ListFilm from "../component/listFilem";
import Footer from "../component/foooter";
import Admin from "../component/sectionAdmin";
// data
import { connect } from "react-redux";
import { getAllfilmCreator } from "../redux/actions/actionFilm";

class Dashboard extends Component {
  async componentDidMount() {
    await this.props.getAllfilmCreator();
    console.log("didmont");
  }

  render() {
    // const { loading, lfm, dfm, data, error, Auth } = this.props;
    // const films =
    //   data.length > 0 ? data.filter((movies) => movies.category.id === 2) : [];
    // const tvshows =
    //   data.length > 0 ? data.filter((movies) => movies.category.id === 1) : [];
    // // admin or not
    // let admin = false;
    // if (Auth.length > 0 && Auth[0].role > 0) {
    //   admin = true;
    // }
    console.log("render");
    return (
      // fragmen
      <>
        <Header />
        <Jumbotron />
        {/* {loading || lfm ? (
          <h1 className="loading">Loading.....</h1>
        ) : error ? (
          <h1 className="loading">{error}</h1>
        ) : (
          ""
        )}
        {dfm.id ? <h1 className="loading">Loading.....</h1> : ""}
        {data.length > 0 ? (
          <>
            {admin ? (
              <Admin tv={tvshows} film={films} />
            ) : (
              <>
                <ListFilm
                  kategori="TV Shows"
                  data={data.length > 0 && !loading ? tvshows : []}
                />
                <ListFilm
                  kategori="Movies"
                  data={data.length > 0 && !loading ? films : []}
                />
              </>
            )}
          </>
        ) : (
          <h1 className="loading"> Film Blank </h1>
        )} */}
        <Footer created="Ade Hikmat Pauji Ridwan" />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.getAllfilm;
  const { data: dfm, loading: lfm, error: efm } = state.deleteFilm;
  const { data: Auth } = state.authReducer;
  return {
    data,
    loading,
    error,
    dfm,
    lfm,
    efm,
    Auth,
  };
};

export default connect(mapStateToProps, { getAllfilmCreator })(Dashboard);
