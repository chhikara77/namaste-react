
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  useEffect(()=>{
    console.log("useeffect called")
    fetchData()
  },[]);
  const fetchData =async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      const json=await data.json()
      console.log(json)
      setListOfRestraunt(json.data.cards[2].data.data.cards);
}

  if(listOfRestaurants.length ==0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;