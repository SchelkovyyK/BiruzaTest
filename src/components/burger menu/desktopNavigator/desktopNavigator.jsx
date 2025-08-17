import "./desktopNavigator.scss";
import { NavLink } from "react-router-dom";
function DesktopNavigator({ active}) {
  return (
     <div className={`desktopNavigator ${active ? "active" : ""}`}>
      <div className="desktopNavigator__sidebar">
        <NavLink
          to="/desktop1"
          className={({ isActive }) =>
            "desktopNavigator__sidebar__link" + (isActive ? " active" : "")
          }
        >
          Desktop 1
        </NavLink>
        <NavLink
          to="/desktop2"
          className={({ isActive }) =>
            "desktopNavigator__sidebar__link" + (isActive ? " active" : "")
          }
        >
          Desktop 2
        </NavLink>
        <NavLink
          to="/desktop3"
          className={({ isActive }) =>
            "desktopNavigator__sidebar__link" + (isActive ? " active" : "")
          }
        >
          Desktop 3
        </NavLink>
      </div>
    </div>
  );
}

export default DesktopNavigator;
