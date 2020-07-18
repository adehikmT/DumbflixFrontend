import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "white",
    height: 270,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
    [theme.breakpoints.down("md")]: {
      height: 230 / 3,
      marginLeft: 30 / 3,
      marginRight: 20 / 3,
      marginTop: 10 / 3,
    },
  },
  title: {
    color: "white",
    marginLeft: -25,
  },
  tahun: {
    color: "#d0d0d0",
    position: "inline-block",
    marginLeft: -25,
    marginTop: 3,
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function CardFilm(props) {
  const classes = useStyles();
  const { judul, tahun } = props;
  const show = props.list ? (
    <span />
  ) : (
    <ul>
      <li>
        <span className={classes.title}>{judul}</span>
      </li>
      <li>
        <span className={classes.tahun}>{tahun}</span>
      </li>
    </ul>
  );

  const link = "/detail/" + props.id;
  return (
    <>
      <CardArea>
        <Link to={link}>
          <CardMedia
            className={classes.card}
            image={props.imgUrl}
            title={props.judul}
          />
        </Link>
        {show}
      </CardArea>
    </>
  );
}
