import "./App.css";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import ProductPicture from "./components/ProductPicture/ProductPicture";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ModalPicture from "./components/ProductPicture/ModalPicture";

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
        </div>
    );
}

export default App;
