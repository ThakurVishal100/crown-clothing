import { HiOutlineShoppingBag } from "react-icons/hi2";  
import { useContext } from "react";              
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen , cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <HiOutlineShoppingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
