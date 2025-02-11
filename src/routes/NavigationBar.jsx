import { Link, NavLink, Outlet } from "react-router-dom";
import "./routes.css";
import { useState } from "react";



function NavigationBar() {
    const [category, setCategory] = useState([]);
    const [items, setItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState([]);

    function clearCart() {
        setItemsInCart([]);
    }

    return (
        <>
            <div className="nav-bar">

                <h1>SHOPPING PAGE</h1>
        
                <div className="nav-middle">
                    <NavLink to="/" className='nav-link' >Home</NavLink>
                    <NavLink to="about" className="nav-link">About Us</NavLink>
                    <NavLink to="contacts" className="nav-link">Contact</NavLink>
                </div>

                <div className="nav-right">
                    <Link to = "cart">
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/shopping-cart.png" alt="shopping-cart" className="cart"/>                        <span className="items-in-cart">{itemsInCart.length}</span>         
                    </Link>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/broom.png" alt="broom" className="clear-cart" onClick={clearCart}/>
                </div>

            </div>
            <div className="main">
                <Outlet context={{ items, setItems,category, setCategory, itemsInCart, setItemsInCart }}/>
            </div>
        </>
        
    ) 
}


export default NavigationBar;