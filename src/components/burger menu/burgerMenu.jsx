import { useState } from "react";
import BurgerMenuButton from "./burgermenubutton/BurgerMenuButton";
import DesktopNavigator from "./desktopNavigator/desktopNavigator";

function BurgerMenu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <BurgerMenuButton active={isActive} setActive={setIsActive} />
      <DesktopNavigator active={isActive} />
    </>
  );
}

export default BurgerMenu;
