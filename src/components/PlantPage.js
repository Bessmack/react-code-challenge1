import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) =>
        setPlants(data.map((p) => ({ ...p, inStock: true })))
      );
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, { ...newPlant, inStock: true }]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setPlants(plants.filter((plant) => plant.id !== id))
      })
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} onDeletePlant={handleDelete} />
    </main>
  );
}

export default PlantPage;