import React from "react";
import "./App.css";
import Header from "../src_components/Header";
import ExpenseList from "../src_components/ExpenseList";

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseList />
    </div>
  );
}

export default App;
