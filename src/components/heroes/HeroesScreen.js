import React, { useMemo } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import { GetHeroByID } from '../../selectors/GetHeroByID';

export const HeroesScreen = ({history}) => {

    const {heroID} = useParams();
    
    const hero = useMemo(() => GetHeroByID(heroID), [history]) 

    if( !hero ) {
        return <Redirect to="./" />
    }
    
    const {id,superhero,publisher,characters,alter_ego,first_appearance} = hero;

    const handleInput = () => {

        if(history.length <=2){
            (publisher=="Marvel Comics")?history.push("/marvel"):history.push("/dc")
        }
        else
        {history.goBack();}  
    }
    

    return (
        <div  className = "conteiner-HeroesScreen animate__animated animate__backInLeft">
            <img  src={`../assets/${id}.jpg`} alt={superhero}/>
            <div>
                    <h1>{superhero}</h1>  
                    <hr />
                    <h2>{ alter_ego }</h2>
                    <h5>
                        {
                            (alter_ego != characters)&&(characters)
                        }
                    </h5>
                    <h5>Primera aparición: {first_appearance}</h5>
                    <h5>Creador: {publisher}</h5>
                    <hr />
                    <button className="btn btn-outline-info" onClick = {handleInput}>ATRAS</button>
            </div>
        </div>
    )
}
