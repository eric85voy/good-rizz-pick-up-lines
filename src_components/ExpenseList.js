import React, { useState } from "react";
import "./ExpenseList.css";

function ExpenseList() {
  const lines = [
    "Are you WiFi? Because I’m feeling the connection.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a name, or can I call you mine?",
    "You must be tired, because you’ve been running through my mind all day."
  ];

  const [rizz, setRizz] = useState("");

  const generateRizz = () => {
    const random = lines[Math.floor(Math.random() * lines.length)];
    setRizz(random);
  };

  return (
    <div>
      <button onClick={generateRizz}>Generate Rizz</button>
      <p className="rizz-text">{rizz}</p>
    </div>
  );
}

export default ExpenseList;
