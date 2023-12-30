import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 * 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   -RestaurantCard
 *    -img
 *    -Name of restaurant, star rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 */


const AppLayout = () => {
    return (
        <div className="app">
         <Header />
         <Body />
        </div>
    )
}

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
