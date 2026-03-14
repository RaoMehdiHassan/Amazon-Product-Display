import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sale from "./sale";

function App() {
  // const brand = "Pel Pakistan";
  // const price = "$120";
  // const rating = "4.5 ⭐️⭐️⭐️⭐️";

  return (
    <div>
      {/* <Sale Brand={brand} Price={price} Rating={rating} /> */}
     <Sale />
    </div>
  );
}

export default App;
