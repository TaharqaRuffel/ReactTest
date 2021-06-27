import React, {useState} from "react";
import axios from "axios";
import {Button, Col, Form, Row} from "react-bootstrap";

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
            <Form as={Row} className="mt-2">
                <input type="hidden" name="regionId" id="regionId"
                       value="{{region.id}}"
                />
                <Col className="d-flex">
                    {isEditing ? (
                        <Form.Control
                            className="w-100"
                            type="text" name="regionNom" id="regionNom"
                            onChange={(e) => setEditRegion(e.target.value)}
                            defaultValue={region.nom}/>
                    ) : (
                        <span>{region.nom}</span>
                    )}
                </Col>
                <Col className="d-flex justify-content-center">
                    {isEditing ? (
                        <button className="btn btn-success me-3" onClick={handleEdit}>
                            Valider
                        </button>
                    ) : (
                        <Button variant="primary" type="button" className="ms-2" onClick={() => setIsEditing(true)}>
                            modifier
                        </Button>
                    )}
                    <Button variant="danger" onClick={handleDelete} type="button" className="ms-2">supprimer</Button>
                </Col>
            </Form>
        </div>
    );
};

export default Region;
