import React, {useState} from "react";
import axios from "axios";
import {Button, Container, Form, InputGroup, Row} from "react-bootstrap";

const RegionAdd = ({update, hasCancel}) => {
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
                                <InputGroup.Text id="inputGroupPrepend">Région</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Ajouter une région"
                                aria-describedby="inputGroupPrepend"
                                name=" nom" id="nom"
                                onChange={(e) => setNomRegion(e.target.value)}
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

export default RegionAdd;
