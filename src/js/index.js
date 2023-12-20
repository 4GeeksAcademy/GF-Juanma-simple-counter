//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let segundos1 = 0;
let segundos2 = 0;
let segundos3 = 0;
let segundos4 = 0;
let segundos5 = 0;
let segundos6 = 0;

//render your react application
const Contador = setInterval(() => {
    Alerta()
    
    if (segundos1 < 9) {
        segundos1 += 1;
    } else {
        segundos1 = 0
        if (segundos2 < 9) {
            segundos2 += 1;
        } else {
            segundos2 = 0;
            if (segundos3 < 9) {
                segundos3 += 1;
            } else {
                segundos3 = 0
                if (segundos4 < 9) {
                    segundos4 += 1;
                } else {
                    segundos4 = 0
                    if (segundos5 < 9) {
                        segundos5 += 1
                    } else {
                        segundos5 = 0
                        if (segundos6 < 9) {
                            segundos6 += 1;
                        } else { segundos6 = 0 }
                    }
                }
            }
        }
    }
    function Alerta() {
        if (segundos1 === 0 && segundos2 === 1) {
            return alert('Has llegado a 10');
        }
    };
   
   
    ReactDOM.render(<Home
        
        segundos1={segundos1}
        segundos2={segundos2}
        segundos3={segundos3}
        segundos4={segundos4}
        segundos5={segundos5}
        segundos6={segundos6} />, document.querySelector("#app"));
}, 1000)


