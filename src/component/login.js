import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

// REDUX
import { connect } from "react-redux";
import { authLoginCreator } from "../redux/actions/actionAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginLeft: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "30ch",
    marginBottom: 5,
    marginTop: 5,
  },
  btn: {
    marginTop: 10,
  },
  downText: {
    textDecoration: "none",
    color: "#000",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [user, setUser] = React.useState({});

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange2 = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const password = values.password;
    props.authLoginCreator({ ...user, password });
  };

  const { data, loading, error } = props;
  if (data.length > 0 && data[0].id > 0) {
    window.location.reload(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box flexWrap="wrap" justifyContent="center">
          <Box>
            <h3>Login</h3>
            <small>
              {loading ? (
                "Loading.."
              ) : error ? (
                <span color="red">{error}</span>
              ) : (
                ""
              )}
            </small>
          </Box>
          <Box order={5} justifyContent="center">
            <TextField
              required
              type="email"
              id="standard-required"
              label="email"
              name="email"
              className={classes.textField}
              onChange={handleChange2}
              autoFocus
            />
          </Box>
          <Box order={5} justifyContent="center">
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <div className={classes.btn}>
            <Button type="submit" variant="outlined" color="primary">
              Login
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  const { data, loading, error } = state.authReducer;
  return {
    data,
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  authLoginCreator,
})(Login);
