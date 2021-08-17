import React from 'react'
import { heroes } from '../data/heroes'

export const GetHeroByPunisher = (publisher) => {

    if(publisher !="DC Comics" && publisher != "Marvel Comics"){
        throw new Error(`${publisher} invalido, ingrese DC Comics o Marvel`)
    }

    return heroes.filter(hero => hero.publisher === publisher)

}
