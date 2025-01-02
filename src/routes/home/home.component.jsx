import React from "react";
// import Categories from "./component/categories/categories.components";
import Categories from "../../component/categories/categories.components";
import { Outlet } from "react-router-dom";
const Home = () => {
 
  return (
    <>
      <Outlet />
      <Categories  />
    </>
  );
};

export default Home;
