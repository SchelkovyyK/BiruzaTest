import { NavLink } from "react-router-dom";
import "./Navigation.scss";
function Navigation() {
  return (
    <nav className="nav">
      <NavLink
        to="home"
        className={({ isActive }) => "nav__link" + (isActive ? " active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="main"
        className={({ isActive }) => "nav__link" + (isActive ? " active" : "")}
      >
        Main
      </NavLink>
      <NavLink
        to="step"
        className={({ isActive }) => "nav__link" + (isActive ? " active" : "")}
      >
        Step
      </NavLink>
      <NavLink
        to="gex"
        className={({ isActive }) => "nav__link" + (isActive ? " active" : "")}
      >
        Gex
      </NavLink>
    </nav>
  );
}

export default Navigation;
