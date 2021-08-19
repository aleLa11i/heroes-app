import React from 'react'
import { Link } from 'react-router-dom'


export const HeroCard = ({ 
    id, 
    superhero,
    publisher, 
    alter_ego, 
    first_appearance, 
    characters }) => {

    

    return (
        <div className="hero-img">
            <h3>{superhero}</h3>
            <img src={`./assets/${id}.jpg`} alt="hero"/>
            <Link to={`./hero/${id}`}>Mas...</Link>
        </div>
    )
}
