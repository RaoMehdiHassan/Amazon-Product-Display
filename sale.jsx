import React from "react";
import "./sale.css";

// for add emoji press crt⭐️l+cmd+space

const Sale = () => {
  const details = (props) => {

      // <>
      // <p>{props.brand}</p>
      // <p>{props.rating}</p>
      // <p>{props.price}</p>
      // </>

    const product = {
      Brand: "Pel Pakistan",
      Price: "$120",
      Rating: "4.5 ⭐️⭐️⭐️⭐️",
    };

    for(let key in product){ 
      alert(`${key}: ${product[key]}`);
    }  
    
// alert(JSON.stringify(product, null, 2));

// let newPro = "";
//     Object.entries(product).forEach(([key, value]) => {
//   newPro = (`${key}: ${value}`);
//   return newPro;
// });
//       alert(newPro);
  };
  return (
    <>
      <div id="mainContainer">
        <h2>Microwave Oven</h2>
        <img src="src/assets/microwave.png" alt="microwave" />
        <p>This is microwave oven is available for sale!</p>
        <p id="p1">
          <span>Rating 4.5 ⭐️⭐️⭐️⭐️</span>
          <span>Price $120</span>
        </p>
        <button onClick={details}>Show Details</button>
      </div>
    </>
  );
};

export default Sale;
