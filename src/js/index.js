//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundos = 0;
let segundos10 = 0;
let segundos100= 0;
let segundos1000= 0;
let segundos10000 = 0;
let segundos100000= 0;

//render your react application
const contador = setInterval(() => {
    if (segundos < 8) {
        segundos += 1;
    } else { segundos = 0 
    if (segundos10 < 8) {
        segundos10 += 1;
    } else { segundos10 = 0 
    if (segundos100 < 8) {
        segundos100 += 1;
    } else { segundos100 = 0 
    if (segundos1000 < 8) {
        segundos1000 += 1;
    } else { segundos1000 = 0 
    if (segundos10000 < 8) {
        segundos10000 += 1
    } else { segundos10000 = 0 
    if (segundos100000 < 8) {
        segundos100000 += 1;
    } else { segundos100000 = 0 }}}}}}

console.log(segundos,segundos10,segundos100,segundos1000,segundos10000,segundos100000)
    ReactDOM.render(<Home segundos={segundos} segundos10={segundos10} segundos100={segundos100} segundos1000={segundos1000} segundos10000={segundos10000} segundos100000={segundos100000}/>, document.querySelector("#app"));
}, 1000)


