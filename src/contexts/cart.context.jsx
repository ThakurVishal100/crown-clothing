import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //   find if catitems contain product to add
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id  
  );

  // if item exist, increment quantity
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem =(cartItems, productToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );
  // check if quantity is equal to 1 before removing item
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  } 

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],

  addItemToCart: () => {},
   removeItemFromCart: () => {},
  clearItemFromCart: () => {},

  cartCount:0,                 
  cartTotal:0,                                 
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, cartTotal, removeItemFromCart, clearItemFromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
