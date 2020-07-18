import React from "react";

function NotFound() {
  const styl = {
    fontSize: 100,
    FontWight: 12,
    color: "white",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <>
      <h2 style={styl}>404 Page Not Found</h2>
    </>
  );
}

export default NotFound;
