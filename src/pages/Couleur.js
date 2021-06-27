import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";

const Couleur = ({couleur, update}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editCouleur, setEditCouleur] = useState("");

    //////////PUT\\\\\\\\\\\\
    const handleEdit = () => {
        const newData = {
            id: couleur.id,
            nom: editCouleur ? editCouleur : couleur.nom,
        };

        axios.put("http://localhost:8080/couleurs", newData).then(() => {
            setIsEditing(false);
            update(true);
        });
    };

    //////////DELETE\\\\\\\\\\\\
    const handleDelete = () => {
        const idCouleur = couleur.id;

        axios.delete("http://localhost:8080/couleurs/" + idCouleur).then(() => {
            update(true);
        });
    };

    return (
        <div>
            <hr/>
            <Form as={Row} className="mt-2">
                <input type="hidden" name="couleurId" id="couleurId"
                       value={couleur.id}
                />
                <Col className="d-flex">
                    {isEditing ? (
                        <Form.Control
                            className="w-100"
                            type="text" name="couleurNom" id="couleurNom"
                            onChange={(e) => setEditCouleur(e.target.value)}
                            defaultValue={couleur.nom}/>
                    ) : (
                        <span>{couleur.nom}</span>
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

export default Couleur;