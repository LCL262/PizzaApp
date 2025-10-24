import React from "react";
import ReactDOM from "react-dom/client";

function PizzaList({ name, image, description, price }) {
  return (
    <div>
      <img src={image} alt={name} width="500" height="400" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
}



function App() {
  // You can add more pizza objects here
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
    <div>
      <h1>Chunlin's Pizza Co.</h1>
      {pizzas.map((pizza, index) => (
        <PizzaList
          key={index}
          name={pizza.name}
          image={pizza.image}
          description={pizza.description}
          price={pizza.price}
        />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);