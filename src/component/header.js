import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Img from "../images/logo.png";
import { Link } from "react-router-dom";
import ProfileIcon from "./profileIcon";
// modal
import Modal from "./modal";

// REDUX
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    backgroundColor: "#1F1F1F",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    height: "50px",
  },
  imgCenter: {
    position: "absolute",
    width: "65px",
    height: "35px",
    marginLeft: "350px",
    top: "10px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  link: {
    marginTop: -20,
    textDecoration: "none",
    paddingLeft: "30px",
    color: "white",
    [theme.breakpoints.down("md")]: {
      paddingTop: 20,
    },
  },
  tombol: {
    marginTop: -20,
    position: "relative",
    width: 100,
    height: theme.height,
    marginRight: "30px",
    float: "right",
    zIndex: 200,
  },
}));

function cek(isLogin) {
  if (!isLogin) {
    return (
      <div style={{ marginTop: "-10px" }}>
        <Modal
          color="secondary"
          width="20"
          height="20"
          size="small"
          name="Login"
        />
        <Modal
          width="20"
          height="20"
          size="small"
          texCol="#1F1F1F"
          name="Register"
        />
      </div>
    );
  } else {
    return (
      <div>
        <ProfileIcon />
      </div>
    );
  }
}

function cekAdmin(isAdmin, link) {
  if (!isAdmin) {
    return (
      <div style={{ marginTop: "-18px" }}>
        <Grid item lg>
          <Typography>
            <Link to="/" className={link}>
              Home
            </Link>
            <Link to="/tv" className={link}>
              TV Shows
            </Link>
            <Link to="/movies" className={link}>
              Movies
            </Link>
          </Typography>
        </Grid>
      </div>
    );
  }
}

const Header = (props) => {
  const classes = useStyles();
  const { Auth } = props;

  // admin or not
  let admin = false;
  let token = false;
  if (Auth.length > 0 && Auth[0].role > 0) {
    admin = true;
  }
  // cektoken
  if (localStorage.token) {
    token = true;
  }

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {cekAdmin(admin, classes.link)}
            <Grid item lg>
              <Link to="/">
                <img src={Img} className={classes.imgCenter} alt="img" />
              </Link>
            </Grid>
            <Grid item md>
              {cek(token)}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

const mapStateToProps = (state) => {
  const { data: Auth } = state.authReducer;
  return {
    Auth,
  };
};

export default connect(mapStateToProps)(Header);
