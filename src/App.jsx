import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Desktop1 from "./components/desktop1/desktop1";
import BurgerMenu from "./components/burger menu/burgerMenu";
import Home from "./components/desktop1/Home/Home";
import Main from "./components/desktop1/main/main";


function App() {
  return (
    <BrowserRouter>
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Navigate to="/desktop1/home" replace />} />
        <Route path="/desktop1" element={<Desktop1 />}>
          <Route index element={<Navigate to="home" replace />} />
          {/* Вкладені маршрути */}
          <Route path="home" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="step" element={<Home />} />
          <Route path="gex" element={<Main />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
