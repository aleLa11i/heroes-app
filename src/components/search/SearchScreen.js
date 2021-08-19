import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GetHeroByName } from '../../selectors/GetHeroByName'
import { AuthContext } from '../auth/AuthContext'
import { HeroCard } from '../heroes/HeroCard'
import { SearchContext } from './SearchContext'

export const SearchScreen = () => {

     const {value} = useContext(SearchContext)
     const {search} = value;
     const {state} = useContext(AuthContext)
     const history = useHistory()

     if(!state.logged){

        localStorage.setItem("lastPath","/search")
        history.push("/login")
     }

     
     const heroe = GetHeroByName(search)

    return (
        <div>
            {(search !== "")&&(<h4>Busqueda: { search }</h4>)}

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
