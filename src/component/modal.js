import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
// halaman render
import Login from "./login";
import Reg from "./register";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btn: {
    marginTop: "100px",
  },
  root: {
    backgroundColor: theme.color,
    width: theme.width,
    height: theme.height,
    marginRight: "30px",
    float: "right",
  },
}));

function cek(props) {
  if (props === "Login") {
    return <Login />;
  } else {
    return <Reg />;
  }
}

export default function TransitionsModal(props) {
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);

  const halaman = cek(props.name);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { size } = props;

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => handleOpen()}
        color={props.color}
        size={size}
        className={classes.root}
      >
        {props.name}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>{halaman}</div>
        </Fade>
      </Modal>
    </div>
  );
}
