import React from 'react';
import {Nav, Navbar} from "react-bootstrap";


const Navigation = () => {
    return (
    <nav>
        <Navbar bg="light" expand="lg">
            <a href="/" className="navbar-brand active">
                <img className="bottle" src={process.env.PUBLIC_URL + '/img/Bottle32x32.png'} alt="bouteille"/>
                <img className="bottle" src={process.env.PUBLIC_URL + '/img/Bottle32x32.png'} alt="bouteille"/>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/bouteilles" >Liste des bouteilles</Nav.Link>
                    <Nav.Link href="/bouteille/ajouter" >Ajouter bouteille</Nav.Link>
                    <Nav.Link href="/couleurs" >Couleurs</Nav.Link>
                    <Nav.Link href="/regions" >Régions</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </nav>
    );
};

export default Navigation;