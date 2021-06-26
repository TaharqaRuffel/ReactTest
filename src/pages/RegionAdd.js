import React, { useState } from "react";
import axios from "axios";

const RegionAdd = ({ update }) => {
  const [nomRegion, setNomRegion] = useState("");

  //////////POST\\\\\\\\\\\\
  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/regions", {
        nom: nomRegion,
      })
      .then(() => {
        setNomRegion("");
        update(true);
      });
  };

  return (
    <form onSubmit={(e) => handleAdd(e)}>
      <input
        type="text"
        placeholder="Ajouter une région"
        onChange={(e) => setNomRegion(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default RegionAdd;
