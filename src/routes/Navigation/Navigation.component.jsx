import userEvent from "@testing-library/user-event";
import React, { Fragment, useContext } from "react";
import "./Nvigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/Cart.context";
import { ReactComponent as CrownLogo } from "../../assets/Crown.svg";
import CartIcon from "../../components/Cart-Icon/CartIcon.component";
import { Outlet, Link } from "react-router-dom";

import CartDropdown from "../../components/cart-Dropdown/CartDropdown.component";
import { signOutUser } from "../../utils/firebase/Firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
