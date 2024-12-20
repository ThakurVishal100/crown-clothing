import React from "react";
import Categories from "./component/categories/categories.components";
import Home from "./routes/home/home.component";
import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import { Toaster } from "react-hot-toast";

// const notify = () => toast('Here is your toast.');

const Shop = () => {
  return (
    <div>
      <h1>I am the Shop Manager</h1>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
