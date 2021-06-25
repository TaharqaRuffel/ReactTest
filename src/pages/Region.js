import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

const Region = () => {
  const [regions, setRegions] = useState([]);
  const [nomRegion, setNomRegion] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getRegions();
  }, []);

  const getRegions = () => {
    axios
      .get("http://localhost:8080/regions")
      .then((res) => setRegions(res.data));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:8080/regions", {
  //       nom: nomRegion,
  //     })
  //     .then(() => {
  //       setNomRegion("");
  //       getRegions();
  //     });
  // };

  // const handleModify = () => {
  //   console.log("dans la méthode");
  // };

  return (
    <div class="container">
      <Navigation />
      <h1>REGIONS</h1>
      <div>
        {regions.map((region) => {
          return (
            <div class="row" key={region.id}>
              <div class="col-3">
                {isEditing ? (
                  <input type="text" placeholder={region.nom} />
                ) : (
                  <p>{region.nom}</p>
                )}
              </div>
              <div class="col-3">
                <button
                  onClick={setIsEditing(true)}
                  class="btn btn-warning me-3 mb-3"
                >
                  Modifier
                </button>
                <button class="btn btn-danger">Supprimer</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Ajouter une région"
          onChange={(e) => setNomRegion(e.target.value)}
        />
        <button type="submit">Valider</button>
      </form> */}
    </div>
  );
};

export default Region;
