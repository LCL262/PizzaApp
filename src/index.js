import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Global cart array
let cart = [];

// Pizza item component
function PizzaList({ name, image, description, price, onOrder }) {
  return (
    <li className="pizza">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>${price}</span>
        <button className="btn" onClick={() => onOrder({ name, price })}>
          Add to Cart
        </button>
      </div>
    </li>
  );
}

// Header
function Header() {
  return (
    <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>
      Chunlin's Pizza Kingdom
    </h1>
  );
}

// Pizza data
const pizzas = [
  { name: "Spinach Pizza", image: "/pizzas/Spinach.jpg", description: "Tomato, mozzarella, spinach, and ricotta cheese.", price: 10 },
  { name: "Pepperoni Pizza", image: "/pizzas/pepperoni.jpg", description: "Tomato, mozzarella, and pepperoni slices.", price: 12 },
  { name: "Margherita Pizza", image: "/pizzas/margherita.jpg", description: "Tomato, mozzarella, fresh basil, and olive oil.", price: 9 },
  { name: "Hawaiian Pizza", image: "/pizzas/Hawaiian.jpg", description: "Ham, pineapple chunks, mozzarella, and tomato sauce.", price: 11 },
  { name: "BBQ Chicken Pizza", image: "/pizzas/BBQchicken.jpg", description: "Grilled chicken, BBQ sauce, onions, and mozzarella.", price: 13 },
  { name: "Veggie Pizza", image: "/pizzas/veggie.jpg", description: "Bell peppers, onions, mushrooms, olives, and mozzarella.", price: 10 },
];

// MenuItem renders <li> elements
function MenuItem({ onOrder }) {
  return (
    <>
      {pizzas.map((pizza, index) => (
        <PizzaList
          key={index}
          name={pizza.name}
          description={pizza.description}
          price={pizza.price}
          image={pizza.image}
          onOrder={onOrder}
        />
      ))}
    </>
  );
}

// Menu component
function Menu({ onOrder }) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        <MenuItem onOrder={onOrder} />
      </ul>
    </div>
  );
}

// Order component
function Order() {
  return (
    <div className="order">
      <p>We're currently open</p>
      <button className="btn">Order</button>
    </div>
  );
}

// Footer component
function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return <footer className="footer">{isOpen ? <Order /> : "Sorry, we're closed"}</footer>;
}

// Cart component
function Cart() {
  if (cart.length === 0) return null;

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <ul>
        {cart.map((pizza, index) => (
          <li key={index}>
            {pizza.name} - ${pizza.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, pizza) => total + pizza.price, 0)}</p>
    </div>
  );
}

// Main render function
function renderApp() {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <div className="container">
      <Header />
      <Menu onOrder={(pizza) => { cart.push(pizza); renderApp(); }} />
      <Cart />
      <Footer />
    </div>
  );
}

renderApp();
