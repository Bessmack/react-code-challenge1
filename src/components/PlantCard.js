import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {
  const [inStock, setInStock] = useState(plant.inStock);

  const toggleStock = () => {
    setInStock((prev) => !prev);
  };


  const handleDelete = () => {
    onDeletePlant(plant.id)
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Ksh {plant.price}</p>
      <button onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button style={{ backgroundColor:"green", color: "white" }} onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;