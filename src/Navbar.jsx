import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [state, setState] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav nav-underline ">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active fw-bold"
                  onClick={() => setState(true)}
                >
                  ALL
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/fsd"} className="nav-link  fw-bold">
                  FULL STACK DEVELOPMENT
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/ds"} className="nav-link  fw-bold">
                  DATA SCIENCE
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/cyber"} className="nav-link  fw-bold">
                  CYBER SECURITY
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/career"} className="nav-link  fw-bold">
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
