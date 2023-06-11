import React from "react";
import { Outlet ,Link } from "react-router-dom";

const AdminLandingPage = () => {
  return (
    
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark vh-100">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white max-vh-100">
              <Link
                to="/admin_dashborad/menu"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </Link>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li class="nav-item">
                  <Link to="/admin_dashborad/AddNewJob" className="nav-link align-middle text-white px-0">
                    <i class="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline ">Add Job</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i class="fs-4 bi-speedometer2"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Posted Jobs</span>{" "}
                  </Link>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li class="w-100">
                      <Link to='/admin_dashborad/latest' className="nav-link px-0">
                        {" "}
                        <span class="d-none d-sm-inline">Latest</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to='/admin_dashborad/expired' className="nav-link px-0">
                        {" "}
                        <span class="d-none d-sm-inline">Expired</span>{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                
             
                <li>
                  <Link
                    to="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i class="fs-4 bi-grid"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">students</span>{" "}
                  </Link>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu3"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <Link to='/admin_dashborad/Add_student_details' className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Add Student Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/admin_dashborad/Blockstudent' className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Block Student</span> 
                      </Link>
                    </li>
                    <li>
                      <Link to='/admin_dashborad/edit_student_details' className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Edit Student Details </span>
                      </Link>
                    </li>
                    
                  </ul>
                </li>
               
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">Admin</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow"  aria-labelledby="dropdownUser1">
                <li>
                    <Link className="dropdown-item" to='/admin_dashborad/profile '>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin_dashborad/settings">
                      Settings
                    </Link>
                  </li>
                  
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col py-3">
            <Outlet/>
          </div>
        </div>
      </div>
  );
};

export default AdminLandingPage;
