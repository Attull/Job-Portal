import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assests/images/Innomatics_Icon.png";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'

export default function Navbar() {

  const navigate = useNavigate()
  return (
    <>
      {/* first nav-bar starts */}
      <div className="First-navbar">
       
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
                <ul className="navbar-nav d-flex ms-md-auto ">
                  <li className="nav-item">
                  {/* <button className="button-7" role="button"> */}
                      <Link
                        to="/admin_dashborad"
                        className="nav-link button-7 text-white rounded"
                        aria-current="page"
                       
                      >
                        Post Job
                      </Link>
                    {/* </button> */}
                  </li>
                  <li className="nav-item">
                  {/* <button className="button1" role="button"> */}
                    <Link to="/login" className="nav-link button1 text-white rounded">
                      LogIn
                    </Link>
                    {/* </button> */}
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link h-50 rounded-pill">
                      {" "}
                      {/* <AccountCircleIcon sx={{ width: 64, height: 48 }} /> */}
                    </Link>
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
