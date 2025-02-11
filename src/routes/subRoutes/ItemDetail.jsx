import { useLoaderData, useParams, useOutletContext, Link } from "react-router-dom";
import "./Details.css";
import { useState, useEffect } from "react";

export default function ItemDetail() {

    const { itemsInCart, setItemsInCart } = useOutletContext();  

    const { id } = useParams();
    const item = useLoaderData();

    const addItemInCart = async (item) =>  {
        const existingItemIndex = itemsInCart.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex >= 0) {
            const updatedItems = [...itemsInCart];
            updatedItems[existingItemIndex].quantity += 1; 
            await setItemsInCart(updatedItems);
        } else {
            const correctItem = { ...item, quantity: 1 };
            await setItemsInCart([...itemsInCart, correctItem]);
        }
    
        handleAddedToCart();
    }

    const removeItem = async (itemId) => {
        setItemsInCart((prevItems) => prevItems.filter(item => item.id !== itemId));
        handleAddedToCart();
    }

    function handleAddedToCart() {
        setAddedToCart(!addedToCart);
    }


    return (
        <div className="item-detail-container">
            <Link to= "/">
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/circled-left.png" alt="circled-left" className="back-button"/>
            </Link>
            
            <div className="details-left">
                <img src={item.image} alt={item.title} className="detail-image"/>
            </div>
            <div className="details-right">
                <h2>{item.title}</h2>
                <h5>Description:</h5>
                <p>{item.description}</p>
                <p>In Stock</p>
                <p className="price">{item.price} $</p>
                
                <button className="add-to-cart-button" onClick={() => addItemInCart(item)}>Add To Cart</button>                 
            </div>

            <Link to="/cart" className="procced-to-cart">
                <img width="50" height="50" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
                <p>Procced to Cart</p>
                <img width="50" height="50" src="https://img.icons8.com/ios/50/arrow--v1.png" alt="arrow--v1"/>       
            </Link>  
        </div>
    )
    
}

export const ItemDetailLoader = async ({ params }) => {
    const { id } = params;
    
    const res = await fetch("https://fakestoreapi.com/products/" + id);
    return res.json();
}


