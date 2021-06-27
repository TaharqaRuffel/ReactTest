import axios from "axios";
import React, {useEffect, useState} from "react";
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
        <div>
            <h2>Région des vins : </h2>
            {regions.map((region) => {
                return <Region region={region} update={setIsUpdate} key={region.id}/>;
            })}
            <hr/>
            <RegionAdd update={setIsUpdate} hasCancel={false}/>
        </div>
    );
};
export default Regions;
