import React, { useContext } from 'react'
import { heroes } from '../../data/heroes'
import { UserContext } from '../../helpers/UserContext'
import { GetHeroByName } from '../../selectors/GetHeroByName'
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = () => {

     const {value} = useContext(UserContext)
     const {search} = value;
     
     const heroe = GetHeroByName(search)

     console.log(heroe)

    return (
        <div>
            {(search != "")&&(<h4>Busqueda: { search }</h4>)}

            <div className="card-columns animate__animated animate__fadeIn">

            {
                (search === "")?
                <h3 className="alert alert-info">Busque un heroe</h3>:
                (
                    (heroe.length === 0)?
                    <h3 className="alert alert-danger">No se encontro Heroe</h3>:
                    heroe.map( hero => {

                        return <HeroCard
                        key={hero.id} 
                        {...hero} />

                    })
                )
            }
            </div>
        </div>
    )
}
