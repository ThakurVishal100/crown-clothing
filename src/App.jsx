import React from "react";
import Categories from "./component/categories/categories.components";
import Home from "./routes/home/home.component";
import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import { Toaster } from "react-hot-toast";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
// const notify = () => toast('Here is your toast.');



const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
