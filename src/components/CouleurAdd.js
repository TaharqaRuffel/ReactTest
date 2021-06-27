import React, {useState} from 'react';
import {Button, Container, Form, InputGroup, Row} from "react-bootstrap";
import axios from "axios";

const CouleurAdd = ({update, hasCancel}) => {

    const [nomCouleur, setNomCouleur] = useState("");

    //////////POST\\\\\\\\\\\\
    const handleAdd = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/couleurs", {
                nom: nomCouleur,
            })
            .then(() => {
                setNomCouleur("");
                update(true);
            });
    };

    const showCancel = () => {
        if (hasCancel) {
            return <Button variant="secondary" className="ms-2" type="submit">Annuler</Button>;
        }
    }

    return (
        <Container className="text-center">
            <Row className="justify-content-md-center">
                <Form className="d-flex flex-row" onSubmit={(e) => handleAdd(e)}>
                    <Form.Group className="d-flex flex-row">
                        <InputGroup hasValidation>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">Couleur</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Ajouter une couleur"
                                aria-describedby="inputGroupPrepend"
                                name=" nom" id="nom"
                                onChange={(e) => setNomCouleur(e.target.value)}
                            />
                        </InputGroup>
                        {showCancel()}
                        <Button variant="primary" className="ms-2" type="submit">Ajouter</Button>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    );
};

export default CouleurAdd;
