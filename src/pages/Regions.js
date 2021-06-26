import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import RegionAdd from "./RegionAdd";
import Region from "./Region";

const Regions = () => {
  const [regions, setRegions] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);

  useEffect(() => {
    if (isUpdate) {
      getRegions();
      setIsUpdate(false);
    }
  }, [isUpdate]);

  //////////GET\\\\\\\\\\\\
  const getRegions = () => {
    axios
      .get("http://localhost:8080/regions")
      .then((res) => setRegions(res.data));
  };

  return (
    <div class="container">
      <Navigation />
      <h1>REGIONS</h1>
      <div>
        {regions.map((region) => {
          return <Region region={region} update={setIsUpdate} />;
        })}
        <RegionAdd update={setIsUpdate} />
      </div>
    </div>
  );
};

export default Regions;
