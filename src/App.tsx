import "./App.css";
import Logo from "./components/Menu/Logo";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Menu/Profile";
import Cart from "./components/Menu/Cart";
import ProductPicture from "./components/ProductPicture/ProductPicture";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import InCart from "./components/Menu/InCart";
import LeftMenu from "./components/Menu/LeftMenu";
import { useState } from "react";

function App() {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="menu-section">
        <Logo setIsLeftMenuOpen={setIsLeftMenuOpen} />
        <Menu />
        <div className="menu-user">
          <Cart />
          <Profile />
          <InCart />
        </div>
      </div>
      <hr />
      <div className="main-section">
        <ProductPicture />
        <ProductDetail />
      </div>
      <LeftMenu onClose={setIsLeftMenuOpen} show={isLeftMenuOpen} />
    </div>
  );
}

export default App;
