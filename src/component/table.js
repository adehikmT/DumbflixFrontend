import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "../styles/dropdown.css";
import dayjs from "dayjs";
import { BASE_URL } from "../redux/config/api";

//REDUX
import { connect } from "react-redux";
import {
  getAlltransactionCreator,
  patchTransactionCreator,
  deleteTransactionCreator,
} from "../redux/actions/actionTransaction";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    backgroundColor: "#1f1f1f",
  },
  cel: {
    color: "white",
  },
  hed: {
    color: "red",
  },
}));

const SimpleTable = (props) => {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  const {
    data,
    loading,
    error,
    dataPatch,
    loadingPatch,
    errorPatch,
    dataDelete,
    loadingDelete,
    errorDelete,
    Auth,
  } = props;

  // console.log(dataPost);

  useEffect(() => {
    const token = localStorage.getItem("token");
    props.getAlltransactionCreator(token);
    // setCount(count + 1);
    console.log(count);
  }, [count]);

  const betweenDay = (date) => {
    let limitDay = dayjs(date);
    let theDay = dayjs().format("YYYY/MM/DD");
    return limitDay.diff(theDay, "day");
  };

  const henhandleClick = async (event) => {
    const id = event.target.attributes[1].nodeValue;
    const action = event.target.attributes[0].nodeValue;
    const token = localStorage.getItem("token");
    if (action === "delete") {
      await props.deleteTransactionCreator(id, token);
      setCount(count + 1);
    } else {
      let us = 1;
      if (action === "cencle") {
        us = 2;
      }
      await props.patchTransactionCreator(
        { status: action, userStatus: us },
        id,
        token
      );
      setCount(count + 1);
    }
  };

  return (
    <Container>
      {loading || loadingPatch || loadingDelete ? (
        <h3 className={classes.cel}>Loading...</h3>
      ) : error || errorPatch || errorDelete ? (
        <h3
          style={{
            color: "#FF0742",
          }}
        >
          {error} {errorPatch} {errorDelete}
        </h3>
      ) : (
        ""
      )}

      {dataPatch.message ? (
        <h3 className={classes.cel}>{dataPatch.message}</h3>
      ) : dataPatch.id ? (
        <h3 className={classes.cel}>Updated Success</h3>
      ) : (
        ""
      )}

      {dataDelete.id ? <h3 className={classes.cel}>Delete Success</h3> : ""}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.hed}>No</TableCell>
              <TableCell className={classes.hed} align="right">
                Nama
              </TableCell>
              <TableCell className={classes.hed} align="right">
                Bukti Transaksi
              </TableCell>
              <TableCell className={classes.hed} align="right">
                Remaining Active
              </TableCell>
              <TableCell className={classes.hed} align="right">
                Status User
              </TableCell>
              <TableCell className={classes.hed} align="right">
                Status Payment
              </TableCell>
              {Auth.length > 0 && Auth[0].role > 0 ? (
                <TableCell className={classes.hed} align="right">
                  Aksi
                </TableCell>
              ) : (
                ""
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0
              ? data.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell
                      className={classes.cel}
                      component="th"
                      scope="row"
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell className={classes.cel} align="right">
                      {row.user.fullName}
                    </TableCell>
                    <TableCell className={classes.cel} align="right">
                      <img
                        src={`${BASE_URL}/images/${row.attache}`}
                        alt={row.attache}
                        style={{ maxWidth: 25 }}
                      />
                    </TableCell>
                    <TableCell className={classes.cel} align="right">
                      {betweenDay(row.dueDate) > 0
                        ? betweenDay(row.dueDate)
                        : 0}{" "}
                      / Hari
                    </TableCell>
                    <TableCell
                      style={{
                        color: row.userStatus === 1 ? "#0ACF83" : "#FF0742",
                      }}
                      align="right"
                    >
                      {row.userStatus === 1 ? "Active" : "Non Active"}
                    </TableCell>
                    <TableCell
                      style={{
                        color:
                          row.status === "approve"
                            ? "#0ACF83"
                            : row.status === "pending"
                            ? "#F7941E"
                            : "#FF0742",
                      }}
                      align="right"
                    >
                      {row.status}
                    </TableCell>
                    {Auth.length > 0 && Auth[0].role > 0 ? (
                      <TableCell className={classes.cel} align="right">
                        <div className="dropdown">
                          <ArrowDropDownIcon className="dropbtn" />
                          <div className="dropdown-content">
                            <span
                              name="approve"
                              value={row.id}
                              onClick={henhandleClick}
                            >
                              Aprove
                            </span>
                            <span
                              name="cencle"
                              value={row.id}
                              onClick={henhandleClick}
                            >
                              Cencel
                            </span>
                            <span
                              name="delete"
                              value={row.id}
                              onClick={henhandleClick}
                            >
                              Delete
                            </span>
                          </div>
                        </div>
                      </TableCell>
                    ) : (
                      ""
                    )}
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { data, loading, error } = state.getAlltransaction;
  const { data: Auth } = state.authReducer;
  const {
    data: dataPatch,
    loading: loadingPatch,
    error: errorPatch,
  } = state.patchTransaction;

  const {
    data: dataDelete,
    loading: loadingDelete,
    error: errorDelete,
  } = state.deleteTransaction;

  return {
    data,
    loading,
    error,
    dataPatch,
    loadingPatch,
    errorPatch,
    dataDelete,
    loadingDelete,
    errorDelete,
    Auth,
  };
};

export default connect(mapStateToProps, {
  getAlltransactionCreator,
  patchTransactionCreator,
  deleteTransactionCreator,
})(SimpleTable);
