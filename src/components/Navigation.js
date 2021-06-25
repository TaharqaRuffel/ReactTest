import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/couleurs" activeClassName="nav-active">
                Couleurs
            </NavLink>
            <NavLink exact to="/regions" activeClassName="nav-active">
                Régions
            </NavLink>
        </div>
    );
};

export default Navigation;