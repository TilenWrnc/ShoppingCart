import { useEffect, useState } from "react";
import "./Shop.css"
import { useOutletContext, Link } from "react-router-dom";


export default function Cart() {
    const { itemsInCart, setItemsInCart } = useOutletContext();
    
    const removeItem = async (itemId) => {
        setItemsInCart((prevItems) => prevItems.filter(item => item.id !== itemId));
    }

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalPrice = itemsInCart.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [itemsInCart]);

    return (
        <div className="random">

             <Link to= "/">
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/circled-left.png" alt="circled-left" className="back-button-cart"/>
            </Link>

            <div className="cart-container">
                <h1>Cart</h1>
                {itemsInCart.map(itemInCart => (
                    <div className="item-in-cart-container" key={itemInCart.id}>
                        <Link to={`/${itemInCart.id.toString()}`}>
                            <img src={itemInCart.image} alt={itemInCart.title} />
                        </Link>
                        <p>{itemInCart.title}</p>
                        <p className="price-cart">{itemInCart.price} $</p>
                        <div className="quantity">
                            <p>Quantity: {itemInCart.quantity}</p>
                        </div>
                       
                        <button onClick={() => removeItem(itemInCart.id)}>X</button>
                    </div>
                ))}
                <p className="total">Total: {totalPrice} </p>
            </div>

            {totalPrice > 0 && (
                <div className="payment">
                <img width="50" height="50" src="https://img.icons8.com/ios/50/online-payment-.png" alt="online-payment-"/>
                <p>Procced to Payment</p>
                <img width="50" height="50" src="https://img.icons8.com/ios/50/arrow--v1.png" alt="arrow--v1"/>       
            </div>  
            )}

            
        </div>
       
    )
}