import * as React from "react";
import logo from "../../assests/images/Innomatics_Icon.png";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function NavForUser() {
  const navigate = useNavigate();
  return (
    <>
      {/* first nav-bar starts */}
      <div className="First-navbar">
        {/* <nav
          style={{ boxShadow: "0 4px 2px -2px gray" }}
          className="navbar  navbar-expand-lg bg-body-tertiary fixed-top"
        >
          <div className="container-fluid ">
            <img
              src={logo}
              alt="Innomatics logo"
              style={{ width: "130px", height: "40px" }}
              onClick={()=>navigate("/")}
            />
            <button
              className="navbar-toggler "
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
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <button className="button-7" role="button">
                      <Link
                        to="/"
                        className="nav-link  h-50 rounded-pill"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="button-7" role="button">
                      <Link to="/JobVacancy" className="nav-link h-50 rounded-pill">
                        Jobs
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="button-7" role="button">
                      <Link
                        to="/profile"
                        className="nav-link h-50 rounded-pill"
                      >
                        Profile
                      </Link>
                    </button>
                  </li>

                  <li className="nav-item">
                    <button className="button1" role="button">
                      <Link to="/" className="nav-link h-50 rounded-pill">
                        Logout
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav> */}

        <nav
          style={{ boxShadow: "0 4px 2px -2px gray" }}
          className="navbar  navbar-expand-lg bg-body-tertiary fixed-top"
        >
          <div className="container-fluid">
            <img
              src={logo}
              alt="Innomatics logo"
              style={{ width: "80px" }}
              className="px-3"
            />
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <div className='w-50'> */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav  w-100 ">
                <ul className="navbar-nav ms-md-auto ">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link button-7 text-white  rounded"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/JobVacancy"
                      className="nav-link button-7 text-white  rounded"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/profile"
                      className="nav-link button-7 text-white  rounded dropdown-toggle me-5"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          My Jobs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Change Password
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                 
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
