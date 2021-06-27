import React, {useState} from "react";
import axios from "axios";

const Region = ({region, update}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editRegion, setEditRegion] = useState("");

    //////////PUT\\\\\\\\\\\\
    const handleEdit = () => {
        const newData = {
            id: region.id,
            nom: editRegion ? editRegion : region.nom,
        };

        axios.put("http://localhost:8080/regions", newData).then(() => {
            setIsEditing(false);
            update(true);
        });
    };

    //////////DELETE\\\\\\\\\\\\
    const handleDelete = () => {
        const idRegion = region.id;

        axios.delete("http://localhost:8080/regions/" + idRegion).then(() => {
            update(true);
        });
    };


    return (
        <div>
            <hr/>
            <div className="row">
                <div className="col-3">
                    {isEditing ? (
                        <input
                            type="text"
                            onChange={(e) => setEditRegion(e.target.value)}
                            defaultValue={region.nom}
                        />
                    ) : (
                        <span>{region.nom}</span>
                    )}
                </div>
                <div className="col-3 mb-3">
                    {isEditing ? (
                        <button className="btn btn-success me-3" onClick={handleEdit}>
                            Valider
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="btn btn-warning  me-3"
                        >
                            Modifier
                        </button>
                    )}

                    <button onClick={handleDelete} className="btn btn-danger">
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Region;
