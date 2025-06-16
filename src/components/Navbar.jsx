import MyThemeContext, { useTheme } from "./MyThemeContext";


import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";



// import { Provider } from "react-redux";
// import { store } from "../stores/Store";

const Navbar = ({ onCartToggle }) => {
    const { logout } = useAuth();


    const { theme, toggleModes } = useTheme();
    const cartItems = useSelector(state => state.item);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        // <Provider store={store}>

        <div className="navbar w-space-available flex justify-content-right">
            <div className="mytogglebtns "><button onClick={toggleModes}>
                {theme === 'light' ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
            </button></div>
            <button onClick={logout} className="logout-btn">
                Logout
            </button>
            <div className="user-avatar flex align-items-center justify-content-center marginleft">
                JD
            </div>
            <div className=" flex mycartbtn marginleft" >
                <button onClick={onCartToggle}><CiShoppingCart size={25} /></button>
                {totalQuantity > 0 && (
                    <span className="cart-badge absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {totalQuantity}
                    </span>
                )}
            </div>
        </div>

        // </Provider>
    )
}

export default Navbar;