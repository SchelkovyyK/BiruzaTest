import { useEffect, useRef } from "react";
import shape from "/images/pexels-alena-koval-233944-886521.jpg";
import "./header.scss";

function Header() {
    const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (leftRef.current && rightRef.current) {
        leftRef.current.style.left = "0";
        rightRef.current.style.right = "0";
      }
    }, 1000);
  }, []);
  return (
    <header className="header">
      <div ref={leftRef} className="header__leftPart">
        <img src={shape} alt="" />
      </div>
      <div ref={rightRef} className="header__rightPart">
        <img src={shape} alt="" />
      </div>
    </header> 
  );
}

export default Header;
