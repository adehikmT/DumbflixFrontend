import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.color,
    width: theme.width,
    height: theme.height,
    marginRight: "30px",
    float: "right",
  },
}));

//harus camelcase
export default function ButtonCustom(props) {
  const classes = useStyles(props);

  const { href, size } = props;

  return (
    <>
      <Button
        variant="contained"
        href={href}
        color={props.color}
        size={size}
        className={classes.root}
      >
        {props.name}
      </Button>
    </>
  );
}
