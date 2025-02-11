import { Children } from "react";
import { createBrowserRouter} from "react-router-dom";
import NavigationBar from "./routes/NavigationBar";
import About from "./routes/subRoutes/About";
import Contacts from "./routes/subRoutes/Contacts";
import Shop from "./routes/subRoutes/Shop";
import ItemDetail, { ItemDetailLoader } from "./routes/subRoutes/ItemDetail";
import Cart from "./routes/subRoutes/Cart";

const routes = [
    {
        path: "/",
        element: <NavigationBar />,
        children: [
            { index: true, element: <Shop /> },
            { path: "about", element: <About /> },
            { path: "contacts", element: <Contacts /> },
            { path: ":id", element: <ItemDetail />, loader: ItemDetailLoader },
            { path: "cart", element: <Cart /> },
        ],
    },
];

export default routes;