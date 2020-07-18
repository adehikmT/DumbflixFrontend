import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IImg from "../images/jumbotron.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// data

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    marginTop: 40,
    [theme.breakpoints.down("md")]: {
      marginTop: 40,
    },
  },
  text: {
    zIndex: "99",
    position: "relative",
    display: "inline-block",
    marginTop: "100px",
  },
  blur: {
    zIndex: "9",
    position: "relative",
    display: "inline-block",
    width: "100%",
    height: "720px",
    backgroundImage: "linear-gradient(to top, rgba(0,0,0,9),rgba(0,0,0,0))",
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
  },
  witcher: {
    width: "35%",
    height: "5%",
    display: "inline-block",
    marginLeft: 100,
    [theme.breakpoints.down("md")]: {
      marginLeft: 30,
    },
  },
  quote: {
    width: "45%",
    paddingLeft: 100,
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 400,
    color: "#d0d0d0",
    textShadow: "2px 2px 4px #000000",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 30,
      fontSize: 0,
    },
  },
  btnparnt: {
    marginLeft: 100,
    [theme.breakpoints.down("md")]: {
      width: 80,
      height: 30,
      fontSize: 10,
      marginLeft: 55,
      marginTop: 5,
    },
  },
}));

export default function Jumbotron(props) {
  const classes = useStyles();

  let token = false;
  if (localStorage.token) {
    token = true;
  }

  const Img = token
    ? "https://i.ytimg.com/vi/kYZut3DWvek/maxresdefault.jpg"
    : IImg;
  const fontImg = token
    ? "https://fanart.tv/detailpreview/fanart/movies/567733/hdmovielogo/crypto-5ca5544547b9c.png"
    : "https://purepng.com/public/uploads/large/purepng.com-the-witcher-3-logowitcherthe-witcherandrzej-sapkowskiwriterfantasy-serieswitcher-geralt-of-riviawitchersbooksmonster-hunterssupernaturaldeadly-beastsseriesvideo-gamesxbox-1701528660976i5oef.png";
  const quotes = token
    ? "Crypto is a 2019 American crime drama thriller film, about money laundering involving cryptocurrency. The film was directed by John Stalberg Jr. and written by Carlyle Eubank, David Frigerio, and Jeffrey Ingber. It stars Beau Knapp, Alexis Bledel, Luke Hemsworth and Kurt Russell. The film was released on April 12, 2019 in the United States"
    : "Gralf of Rivia, a splitary monster hunter, struggles to find his place in a wolrd where people often prove wicked then best                2019";
  return (
    <>
      <div>
        <img src={Img} alt="null" className={classes.root} />
        <div className={classes.blur}>
          <div className={classes.text}>
            <Grid container direction="row" alignItems="flex-start">
              <Grid item lg>
                <img src={fontImg} alt="null" className={classes.witcher} />
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="flex-start">
              <Grid item lg>
                <p className={classes.quote}>
                  {quotes}
                  <Button
                    size="small"
                    variant="outlined"
                    style={{
                      textDecoration: "none",
                      borderColor: "white",
                      color: "white",
                      marginLeft: 10,
                    }}
                  >
                    tv Series
                  </Button>
                </p>
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="flex-start">
              <Grid item lg>
                <Button
                  className={classes.btnparnt}
                  size="large"
                  variant="contained"
                  color="secondary"
                >
                  Whatc Now !
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
