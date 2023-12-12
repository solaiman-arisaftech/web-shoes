"use client";
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  // initial state from local storage
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingWishItems = JSON.parse(localStorage.getItem("wishItems")) || [];

  let initialTotalPrice = 0;
  if (existingCartItems.length > 0) {
    existingCartItems.forEach((item) => {
      initialTotalPrice = initialTotalPrice + item.qty * item.price;
    });
  }

  //State
  const [cartItems, setCartItems] = useState(existingCartItems);
  const [cartTotalPrice, setCartTotalPrice] = useState(initialTotalPrice);
  const [wishItems, setWishItems] = useState(existingWishItems);
  const cartItemsLength = useMemo(() => cartItems.length, [cartItems]);
  const wishItemsLength = useMemo(() => wishItems.length, [wishItems]);
  const [countWishItems, setCountWishItems] = useState(wishItemsLength);
  const [countCartItems, setCountCartItems] = useState(cartItemsLength);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [count, setCount] = useState(0);
  const [wishColor, setWishColor] = useState(0);
  const [quantityCount, setQuantityCount] = useState(1);
  const [qty, setQty] = useState(1);

  //effect
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
  }, [wishItems]);

  //actions
  const addToCart = (items) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.id === items.id && item.size === items.size
    );

    if (existingIndex !== -1) {
      // Item exists, increase the quantity
      setCartItems((prev) => {
        const updatedItems = [...prev];
        updatedItems[existingIndex].qty = items.qty;
        updatedItems[existingIndex].subtotal = items.subtotal;
        return updatedItems;
      });
    } else {
      // Item does not exist, add it to the cart
      setCartItems((prev) => {
        setCountCartItems(countCartItems + 1);
        return [...prev, items];
      });
    }

    let total = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        total = total + item.qty * item.price;
      });
    }
    setCartTotalPrice(total);
  };

  const addToWish = (wishData) => {
    const existingWishIndex = wishItems.findIndex(
      (item) => item.id === wishData.id && item.title === wishData.title
    );
    if (existingWishIndex !== -1) {
      // If exist, remove from wish list
      setWishItems((prev) => {
        const updatedItems = [...prev];
        updatedItems.splice(existingWishIndex, 1);
        setCountWishItems(countWishItems - 1);
        setWishColor(0);
        return updatedItems;
      });
    } else {
      setWishItems((prev) => {
        setCountWishItems(countWishItems + 1);
        setWishColor(1);
        return [...prev, wishData];
      });
    }
  };
  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
  };
  const increase = () => {
    setQty(qty + 1);
  };

  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
        isCartOpen,
        setIsCartOpen,
        cartData,
        setCartData,
        countWishItems,
        setCountWishItems,
        countCartItems,
        setCountCartItems,
        quantityCount,
        setQuantityCount,
        addToCart,
        addToWish,
        existingCartItems,
        existingWishItems,
        wishColor,
        setWishColor,
        increase,
        decrease,
        qty,
        setQty,
        // totalPrice,
        cartItems,
        setCartItems,
        cartTotalPrice,
        wishItems,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
