import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import IconDelete from "@material-ui/icons/Delete";
import Loop from "@material-ui/icons/Loop";
import IconUpdate from "@material-ui/icons/BorderColor";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// card
import CardFilm from "./cardFilm";
//REDUX
import { connect } from "react-redux";
import { deleteFilmCreator } from "../redux/actions/actionFilm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000000",
    width: "100%",
    marginBottom: 0,
    marginRight: 30,
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

  const { dataDelete, loadingDelete, errorDelete, Auth } = props;

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await props.deleteFilmCreator(id, token);
  };

  let admin = false;
  let token = false;
  if (Auth.length > 0 && Auth[0].role > 0) {
    admin = true;
  }
  // cektoken
  if (localStorage.token) {
    token = true;
  }

  let Data = props.data;
  // console.log(Data);
  const List = Data.map((data, index) => {
    return (
      <Grid key={index} item lg={2} xl={1}>
        <CardFilm
          key={index}
          id={data.id}
          imgUrl={data.thumbnailFilm}
          judul={data.title}
          tahun={data.year}
        />

        {Auth.length > 0 && Auth[0].role > 0 ? (
          <>
            <IconButton
              aria-label="delete"
              key={`del${index}`}
              onClick={() => handleDelete(data.id)}
            >
              {loadingDelete ? (
                <Loop fontSize="small" color="secondary" />
              ) : (
                <IconDelete fontSize="small" color="error" />
              )}
            </IconButton>
            <IconButton aria-label="edit" value={data.id} key={`up${index}`}>
              <IconUpdate fontSize="small" color="secondary" />
            </IconButton>{" "}
          </>
        ) : (
          ""
        )}
      </Grid>
    );
  });
  return (
    <section className={classes.root}>
      <Container>
        <div className={classes.judul}>{props.kategori}</div>
        <Grid container>{List}</Grid>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { data: dataDelete, loadingDelete, errorDelete } = state.deleteFilm;
  const { data: Auth } = state.authReducer;
  return {
    dataDelete,
    loadingDelete,
    errorDelete,
    Auth,
  };
};

export default connect(mapStateToProps, {
  deleteFilmCreator,
})(ListFilem);
