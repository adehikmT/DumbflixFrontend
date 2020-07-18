import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute(props) {
  const { component: Component, title: Title } = props;

  let token = false;
  if (localStorage.token) {
    token = true;
  }
  let auth = false;
  if (props.Auth.length > 0) {
    auth = true;
  }

  return (
    <Route
      render={(props) =>
        !token || !auth ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} title={Title} />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
  const { data: Auth } = state.authReducer;
  return {
    Auth,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
