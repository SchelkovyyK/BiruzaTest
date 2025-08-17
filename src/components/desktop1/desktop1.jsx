import Header from "./header/header";
import Navigation from "./Navigation/Navigation";
import { Routes, Route, Outlet } from "react-router-dom";
import "./desktop1.scss";
function Desktop1() {
  return (
    <div className="desktop1">
      <Navigation />
      <Outlet />
      <Header />
    </div>
  );
}

export default Desktop1;
