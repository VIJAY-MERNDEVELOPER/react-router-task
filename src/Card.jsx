/* eslint-disable react/prop-types */
// import PropTypes from "react";

// import React from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Card({ details }) {
  return (
    <div className="col-lg-3 col-md-4">
      <div className="card  h-100 w-100" style={{ maxWidth: "100vw" }}>
        <img
          src={details.imageUrl}
          className="card-img-top"
          alt="..."
          style={{ height: "173px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{details.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
          <a href="#" className="card-link">
            READ MORE
          </a>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">6 February 2024 </small>
        </div>
      </div>
    </div>
  );
}

export default Card;
