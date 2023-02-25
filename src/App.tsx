import "./App.css";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Cart from "./components/Cart";

function App() {
    return (
        <div className="App">
            <div className="menu-section">
                <Logo />
                <Menu />
                <Cart />
                <Profile />
            </div>
        </div>
    );
}

export default App;
