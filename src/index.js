import React from "react";
import ReactDOM from "react-dom/client";

function PizzaList({ name, image, description, price }) {
  return (
    <div>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

function Header() {
  return <h1 style={{color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Chunlin's Pizza Co.</h1>;
};

function Menu() {
    const pizzas = [
  {
    name: "Spinach Pizza",
    image: "/pizzas/Spinach.jpg",
    description: "Tomato, mozzarella, spinach, and ricotta cheese.",
    price: 10
  },
  {
    name: "Pepperoni Pizza",
    image: "/pizzas/Pepperoni.jpg",
    description: "Tomato, mozzarella, and pepperoni slices.",
    price: 12
  },
  {
    name: "Margherita Pizza",
    image: "/pizzas/Margherita.jpg",
    description: "Tomato, mozzarella, fresh basil, and olive oil.",
    price: 9
  }
  ];
  return (
  <div className="menu">
    <h2>Our Menu</h2>
    {pizzas.map((pizza, index) => (
      <PizzaList
        key={index}
        name={pizza.name} 
        description={pizza.description}
        price={pizza.price}
        image={pizza.image}
        />
    ))}
  </div>
  );
};

function Footer(){
  return <footer className="footer">We're currently open</footer>
};

function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);