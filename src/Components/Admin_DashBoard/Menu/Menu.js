import React from "react";
import { Link, Outlet } from "react-router-dom";

function Menu() {
  return (
    <div className="container">
      <div className="row">
        <div className="card col-sm-12 col-md-6 ">
         <Link to='/admin_dashborad/menu/dsview' > <h1 className="text-center">Data Science</h1></Link>
        </div>
        <div className="card col-sm-12 col-md-6">
          <Link to='/admin_dashborad/menu/fsdview'><h1 className="text-center">Full Stcak Development</h1></Link>
        </div>
      </div>
      <div className="row">
      <Outlet/>
      </div>
    </div>
  );
}

export default Menu;
