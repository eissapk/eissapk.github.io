import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/*
You are (probably) a victim of CSS3 100vh not constant in mobile browser assuming that vh changing is the reason for vmin changing too.

Possible solutions:

use Javascript and manually set the size
use vmax in combination with aspect-ratio media queries to estimate vmin
(feels hacky but would most likely accomplish what you want)
prevent the address bar from hiding in the first place: https://stackoverflow.com/a/33953987/2422125
prevent the address bar from showing up in the first place: go fullscreen:
How to make a <div> always full screen?
try <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1, user-scalable=no">
use grid instead like androbin sugested (probably the best)
*/