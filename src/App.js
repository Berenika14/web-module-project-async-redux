import React from "react";
import "./App.css";
import Coffee from "./components/Coffee";

function App() {
  return (
    <div className="App">
      <h2 style={{ color: "#2FA9C4", marginTop: "2%", marginBottom: "3%" }}>
        Warning: Cuteness overload
      </h2>

      <Coffee />
    </div>
  );
}

export default App;
