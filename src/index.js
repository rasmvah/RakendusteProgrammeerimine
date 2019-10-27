// import homepage from "./homepage.js";
// import itempage from "./itempage.js";

// console.log("index.js file");

// window.addEventListener("load", () => {
//     homepage.setup();
//     itempage.setup();
// });

import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

console.log('root', root);

ReactDOM.render(
    React.createElement(
        "button",
        {},
        "I am a button, Hello world!"
    ),
    root
);