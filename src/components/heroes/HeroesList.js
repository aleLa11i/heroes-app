import React, { useMemo } from 'react';
import { GetHeroByPunisher } from '../../selectors/GetHeroByPunisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({value}) => {

    const heroes = useMemo(() => GetHeroByPunisher(value),[value])

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map((hero,i)=>{
                   return <HeroCard {...hero} />
                })
            }
        </div>
    )
}

