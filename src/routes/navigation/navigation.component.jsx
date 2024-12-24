import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import logo from "../../assets/crown.png";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import CartIcon from "../../component/cart-icon/cart-icon.component"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  

  return (


    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" />
        </Link> 
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        <CartDropdown/>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
