import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Modal/Modal";
import CartProvider from "./store/CartProvider";

function App() {

  const [modalActive, setModalActive] = useState(false);
  const modalActiveHandler = () => setModalActive(!modalActive);

  

  return (
      <CartProvider>
        <div>
          <Nav onModal={modalActiveHandler}/>
          <MealsSummary />
          <Meals />
          <Modal isActive={modalActive} onModal={modalActiveHandler}/>
        </div>
      </CartProvider>
  );
}

export default App;
