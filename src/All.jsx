/* eslint-disable react/prop-types */
// import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function All({ cardDetails }) {
  return (
    <div className="container-sm mt-4 ">
      <div className="row gap-4 justify-content-center">
        {cardDetails.map((details, idx) => {
          return <Card details={details} key={idx}></Card>;
        })}
      </div>
    </div>
  );
}

export default All;
