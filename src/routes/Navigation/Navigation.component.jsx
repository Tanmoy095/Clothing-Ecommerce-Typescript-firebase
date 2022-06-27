import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/Crown.svg";
function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            <div>shop</div>
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
