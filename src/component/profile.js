import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ImageIcon from "@material-ui/icons/People";
import EmailIcon from "@material-ui/icons/Email";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import WcIcon from "@material-ui/icons/Wc";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/Camera";

import Imgs from "../images/profile.jpg"

//REDUX
import { connect } from "react-redux";
class profile extends Component {
  constructor(props) {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const { Auth } = this.props;
    if (Auth.length > 0) {
      const user = Auth[0];
      this.setState({ user });
    }
  }

  render() {
    const styl = {
      width: "200px",
      height: "250px",
      marginTop: "50px",
    };
    const btnFile = {
      backgroundColor: "#f50057",
      marginTop: 20,
      marginLeft: -50,
    };

    const { user } = this.state;
    console.log(user);

    return (
      <>
        <Grid container>
          <Grid item lg={6}>
            <List>
              <ListItem>
                <ImageIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary={user.fullName}
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <EmailIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary={user.email}
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <LocalActivityIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary={user.subscibe ? "Active" : "Non Active"}
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <WcIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary={user.gendre}
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <PhoneIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary={user.phone}
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <LocationOnIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary={user.address}
                  secondary=""
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <input
              accept="image/*"
              className=""
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
            />
            <img
              style={styl}
              src={Imgs}
              alt="ok"
            />

            <label htmlFor="raised-button-file" style={btnFile}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#f50057" }}
                component="span"
                className=""
              >
                <CameraIcon style={{ color: "white" }} />
              </Button>
            </label>
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { data: Auth } = state.authReducer;
  return {
    Auth,
  };
};

export default connect(mapStateToProps)(profile);
