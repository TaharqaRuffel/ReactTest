import React, {useEffect, useState} from 'react';
import axios from "axios";
import Couleur from "../components/Couleur";
import CouleurAdd from "../components/CouleurAdd";

const Couleurs = () => {
    const [couleurs, setCouleurs] = useState([]);
    const [isUpdate, setIsUpdate] = useState(true);

    useEffect(() => {
        if (isUpdate) {
            getCouleurs();
            setIsUpdate(false);
        }
    }, [isUpdate]);

    //////////GET\\\\\\\\\\\\
    const getCouleurs = () => {
        axios
            .get("http://localhost:8080/couleurs")
            .then((res) => setCouleurs(res.data));
    };
    return (
        <div>
            <h2>Couleur des vins : </h2>
            {couleurs.map((couleur) => {
                return <Couleur couleur={couleur} update={setIsUpdate} key={couleur.id}/>;
            })}
            <hr/>
            <CouleurAdd update={setIsUpdate} hasCancel={false}/>
        </div>
    );
};

export default Couleurs;
