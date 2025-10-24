import React from "react";
import ReactDOM from "react-dom/client";

function PizzaPic(){
    return (
        <img
        src="/pizzas/Spinach.jpg"
        alt="Spinach Pizza"
        height="400"
        width="500"
        />
    );
};

function PizzaName(){
    return <h2>Spinach Pizza</h2>
};

function PizzaInfo(){
    return <text>Tomato, mozarella, spinach and ricotta cheese.</text>
};

function Price(){
    return <text>10</text>
};

function App(){
    return (
    <div>
        <h1>Andy's Pizza Co.</h1>
        <PizzaPic />
        <PizzaName />
        <PizzaInfo />
        <div></div>
        <Price />
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);