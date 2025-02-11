import { useEffect } from "react";
import "./Shop.css";
import { Link, useOutletContext } from "react-router-dom";

function Shop() {
    const { items, setItems,category, setCategory } = useOutletContext();    

    const fetchItemCategory = async () => {
        fetch(`https://fakestoreapi.com/products/categories`)
            .then(res=>res.json())
            .then(json=>setCategory(json))
    }

    const fetchItems = async () => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>setItems(json))
    }

    useEffect(() => {
        fetchItems();
        fetchItemCategory();
    }, []);

    return (
        <div className="shop">
            <div id="overview">
                <a href="#category-electronics">
                    {items.length > 0 && (
                        <img src={items[11].image} alt="electronics" className="overview-image" />
                    )}
                    <h1>ELECTRONICS</h1>
                </a>
                <a href="#category-jewelery">
                    {items.length > 0 && (
                        <img src={items[5].image} alt="jewelery" className="overview-image" />
                    )}
                    <h1>JEWELEREY</h1>
                </a>
                <a href="#category-men">
                    {items.length > 0 && (
                        <img src={items[1].image} alt="Mans's Clothing" className="overview-image" />
                    )}
                    <h1>MEN CLOTHING</h1>
                </a>
                <a href="#category-women">
                    {items.length > 0 && (
                        <img src={items[14].image} alt="Womans's Clothing" className="overview-image" />
                    )}
                    <h1>WOMEN CLOTHING</h1>
                </a>
            </div>

            <div className="all-items-container">
                {category.map(itemCategory => (
                    <div id={"category-" + itemCategory.split("'")[0]} key={itemCategory}>
                        <h2 className="category-title">{itemCategory} 
                            <span>
                                <a href="#overview" className="back-to-top"> 
                                    <img src="https://img.icons8.com/ios-filled/50/left-up2--v2.png" alt="arrow up" className="arrow-up-img"/>BACK TO THE TOP </a>
                            </span></h2>
                        <div className="shop-items-container">
                            {items
                                .filter(item => item.category === itemCategory)
                                .map(item => (
                                    <Link to={item.id.toString()} className="shop-item" key={item.title}>
                                        <p>
                                            <img src={item.image} alt={item.title} className="item-image"/>
                                        </p>
                                        <div>
                                            <h3 className="item-title">{item.title}</h3>
                                            <p className="item-price">{item.price + "$"}</p>
                                        </div>                                      
                                    </Link>
                                ))
                            }
                        </div>                       
                    </div>
                ))}
            </div>
            
            
        </div>
    )
}

export default Shop;