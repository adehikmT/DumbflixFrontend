import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Divider from "@material-ui/core/Divider";
import MovieIcon from "@material-ui/icons/Movie";
import Book from "@material-ui/icons/Book";
import Payment from "@material-ui/icons/Payment";
import { Link } from "react-router-dom";
import Imgs from "../images/profile.jpg"

// data
// import Data from '../api/profile'
// REDUX
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("lg")]: {
      marginLeft: 550,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: -10,
      display: "block",
    },
  },
  prof: {
    width: 8,
    height: 8,
    borderRadius: "50%",
  },
  item: {
    marginRight: 10,
  },
  link: {
    textDecoration: "none",
    color: "#1F1F1F",
  },
}));

const ProfileIcon = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hendleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
    window.location.href = "/";
  };

  // admin or not
  const { Auth } = props;
  let admin = false;
  if (Auth.length > 0 && Auth[0].role > 0) {
    admin = true;
  }

  const cek = (admin) => {
    if (admin) {
      return (
        <>
          <Link to="/master" className={classes.link}>
            <MenuItem onClick={handleClose}>
              <MovieIcon className={classes.item} />
              Movies
            </MenuItem>
          </Link>
          <Link to="/transaction" className={classes.link}>
            <MenuItem onClick={handleClose}>
              <Book className={classes.item} />
              Transaction
            </MenuItem>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/payment" className={classes.link}>
            <MenuItem onClick={handleClose}>
              <Payment className={classes.item} />
              Pay
            </MenuItem>
          </Link>
          <Link to="/transaction" className={classes.link}>
            <MenuItem onClick={handleClose}>
              <Book className={classes.item} />
              Transaction
            </MenuItem>
          </Link>
        </>
      );
    }
  };

  const imgicon = (
    <img
      style={{ width: 35, height: 35, marginTop:-10,borderRadius: "50%" }}
      src={Imgs}
      alt="img"
    />
  );

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {imgicon}
      </IconButton>
      <Menu
        style={{ marginTop: 10 }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <Link to="profile" className={classes.link}>
          <MenuItem onClick={handleClose}>
            <AccountCircle className={classes.item} />
            Profile
          </MenuItem>
        </Link>
        {cek(admin)}
        <Divider />
        <MenuItem onClick={hendleLogout}>
          <ExitToAppIcon className={classes.item} />
          Logut
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { data: Auth } = state.authReducer;
  return {
    Auth,
  };
};

export default connect(mapStateToProps)(ProfileIcon);
