import React from "react";
import Container from "@material-ui/core/Container";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListFilm from "./listFilem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: -20,
    color: "secondary",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    color: "white",
    fontSize: 20,
    paddingTop: 100,
    marginRight: 20,
    marginLeft: 20,
  },
  select: {
    color: "white",
    backgroundColor: "#000",
  },
}));

const Admin = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    type: 6,
    name: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const kategori = (type) => {
    if (type === "2") {
      return <ListFilm kategori="TV Series" data={props.tv} />;
    } else if (type === "1") {
      return <ListFilm kategori="Movies" data={props.film} />;
    } else {
      return (
        <>
          <ListFilm kategori="TV Series" data={props.tv} />
          <ListFilm kategori="Movies" data={props.film} />
        </>
      );
    }
  };
  function cek(detail, tv, filem) {
    if (detail) {
      return (
        <>
          <Container>
            <Link to="/master">
              <Button
                variant="contained"
                size="small"
                color="secondary"
                style={{ marginLeft: "90%", marginTop: 20, marginBottom: 20 }}
              >
                add episode
              </Button>
            </Link>
          </Container>
        </>
      );
    } else {
      return (
        <>
          <Container>
            <span className={classes.label}>List Filem</span>
            <FormControl className={classes.formControl} error>
              <InputLabel htmlFor="type" style={{ color: "white" }}>
                Age
              </InputLabel>
              <NativeSelect
                className={classes.select}
                value={state.type}
                onChange={handleChange}
                inputProps={{
                  name: "type",
                  id: "type",
                }}
              >
                <option style={{ backgroundColor: "black" }} value="">
                  Select
                </option>
                <option style={{ backgroundColor: "black" }} value={1}>
                  Movies
                </option>
                <option style={{ backgroundColor: "black" }} value={2}>
                  Tv Series
                </option>
              </NativeSelect>
            </FormControl>
            <Link to="/master">
              <Button
                variant="contained"
                size="small"
                color="secondary"
                style={{ marginLeft: "70%" }}
              >
                add
              </Button>
            </Link>
          </Container>
          {kategori(state.type)}
        </>
      );
    }
  }
  return cek(props.detail);
};

export default Admin;
