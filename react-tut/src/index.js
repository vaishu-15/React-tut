import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Pizza company </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) =>( <Pizza name = {pizza.name} photoName = {pizza.photoName}/>))}

      </div>
      {/* <Pizza
        name="Pizza Spinaci"
        ingerdients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="images/food.jpg"
        price="200"
      />
      <Pizza
        name="Pizza fung"
        ingerdients="Tomato, mozarella and ricotta cheese"
        price="200"
        photoName="images/pizza1.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div>
      <img src={props.photoName} alt={props.name}></img>
      <h2>{props.name}</h2>
      <p>{props.ingerdients}</p>
      <span>{props.price}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}.we are currently open</footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";

// function App() {
//   return (
//     <div className="card">
//       < />
//       <div className="data">
//         <Intro />
//         {/*  */}
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );