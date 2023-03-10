import "./App.css";
import Logo from "./components/Menu/Logo";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Menu/Profile";
import Cart from "./components/Menu/Cart";
import ProductPicture from "./components/ProductPicture/ProductPicture";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import InCart from "./components/Menu/InCart";

function App() {
    return (
        <div className="App">
            <div className="menu-section">
                <Logo />
                <Menu />
                <div className="menu-user">
                    <Cart />
                    <Profile />
                </div>
            </div>
            <div className="main-section">
                <ProductPicture />
                <ProductDetail />
            </div>
            <InCart />
        </div>
    );
}

export default App;
