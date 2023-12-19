import React from "react";
import ReactDOM from "react-dom/client";
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

const Header = () => {
    return (
        <div className="header">
           <div>
            <img className="logo" src="https://img.freepik.com/premium-vector/food-restaurant-logo-design_734473-8.jpg?w=1380" alt="" />
           </div>
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
           </div>
        </div>
    )
}

const RestaurantCard = ({resname,cuisine}) => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/171/a1bb80a3bdb9968b0b937458ae6acfa8.jpg?fit=around|960:500&crop=960:500;*,*" alt="food-logo" />
            <h3>{resname}</h3>
            <h4>{cuisine}</h4>
            <p>Rating 3.5 star</p>
            <p>Eta 45 min</p>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
              <RestaurantCard cuisine = "biryani" resname="kfc"/>
              <RestaurantCard cuisine = "pizza" resname="mcd"/>
              <RestaurantCard/>
              <RestaurantCard/>
              <RestaurantCard/>
              <RestaurantCard/>
              <RestaurantCard/>
              <RestaurantCard/>
              <RestaurantCard/>
            </div>
        </div>
    )
}


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
