import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "hello worlds from iside react"
    );

const jsxheading = <h1 id="heading">this is jsx heading</h1>

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
console.log(heading);
console.log(jsxheading); //both connsole return same object