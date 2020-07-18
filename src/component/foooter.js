import React from "react";

function Footbar(props) {
  return (
    <>
      <div style={style}> {props.created} </div>
    </>
  );
}

const style = {
  backgroundColor: "#000000",
  textAlign: "center",
  paddingTop: 100,
  paddingBottom: 50,
  color: "#d0d0d0",
  width: "100%",
  heigth: 200,
};

export default Footbar;
