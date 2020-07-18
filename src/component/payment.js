import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/PhotoCamera";
import dayjs from "dayjs";

// REDUX
import { connect } from "react-redux";
import { postTransactionCreator } from "../redux/actions/actionTransaction";

class payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      transaction: { startDate: "", dueDate: "", image: "" },
    };
  }

  handleChangeFile = (event) => {
    event.preventDefault();
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    var start = dayjs().format("YYYY/MM/DD");
    var due = dayjs().day(35).format("YYYY/MM/DD");

    reader.onloadend = () => {
      this.setState({
        file: [reader.result],
        transaction: { startDate: start, dueDate: due, image: file },
      });
    };
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(this.state.transaction);
    const token = localStorage.getItem("token");
    await this.props.postTransactionCreator(this.state.transaction, token);
    this.setState({
      file: null,
      transaction: { startDate: "", dueDate: "", image: "" },
    });
  };

  render() {
    var fon = {
      color: "white",
      fontWight: 10,
      marginBottom: 5,
    };

    var dump = {
      color: "#f50057",
      fontWight: 100,
      marginBottom: 5,
    };
    const { data, loading, error } = this.props;
    return (
      <>
        <div style={fon}>
          Bayar sekarang dan nikmati film film yang kekinian dari{" "}
          <span style={dump}>Dumplix</span>
        </div>
        <div style={fon}>
          <span style={dump}>Dumplix</span> : 0090909090
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            accept="image/*"
            className=""
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
            ref="file"
            onChange={this.handleChangeFile}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                maxWidth: 25,
                marginLeft: -2,
                marginTop: 5,
              }}
              component="span"
              className=""
            >
              <AttachFileIcon style={{ color: "#1F1F1F" }} />
            </Button>
          </label>{" "}
          <br />
          <img src={this.state.file} style={{ maxWidth: 300, marginTop: 5 }} />
          <br></br>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: 240, marginTop: 7 }}
            type="submit"
          >
            submit
          </Button>
          <br />
          {loading ? (
            <h3
              style={{
                color: "white",
              }}
            >
              Loading...
            </h3>
          ) : error ? (
            <h3
              style={{
                color: "#FF0742",
              }}
            >
              {error}
            </h3>
          ) : data.id ? (
            <h3
              style={{
                color: "White",
              }}
            >
              good transaction being processed
            </h3>
          ) : (
            ""
          )}
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.postTransaction;
  return {
    data,
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  postTransactionCreator,
})(payment);
