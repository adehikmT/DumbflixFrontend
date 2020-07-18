import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// slide
import Slide from "./slide";
// card
import CardFilm from "./cardFilm";
import Admin from "./sectionAdmin";
//data

// REDUX
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000000",
    width: "100%",
    marginBottom: 0,
    paddingBottom: 30,
    marginRight: 30,
    color: "white",
    position: "relative",
  },
  judul: {
    color: "white",
    backgroundColor: "#000000",
    fontSize: 20,
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop: 20,
  },
}));

const ListFilem = (props) => {
  const classes = useStyles();

  const { Auth } = props;
  // admin or not
  let admin = false;
  if (Auth.length > 0 && Auth[0].role > 0) {
    admin = true;
  }
  function cek(admin) {
    if (admin) {
      return <Admin detail={true} />;
    }
  }
  const {
    description,
    id,
    thumbnailFilm,
    title,
    year,
    category,
  } = props.detail;
  return (
    <section className={classes.root}>
      {cek(admin)}
      <Container>
        <Grid container>
          <Grid item lg={3} xl={1}>
            <CardFilm imgUrl={thumbnailFilm} list={true} />
          </Grid>
          <Grid item lg={5} xl={1}>
            <h2>{title}</h2>
            <small>
              {year} {category.name}
            </small>
            <p>{description}</p>
          </Grid>
          <Grid item lg={4} xl={1}>
            <Slide filmId={id} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { data: Auth } = state.authReducer;
  return {
    Auth,
  };
};

export default connect(mapStateToProps)(ListFilem);
