import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { NavBar } from '../components/ui/NavBar';
import { Home } from '../home/Home';

export const DashboardRoutes = () => {


    return (
        <>
            <NavBar />
            <div className="container mt-3">
                
                <Switch>
                    <Route exact path="/marvel" component={  MarvelScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/hero/:heroID" component={ HeroesScreen } />
                    <Route exact path="/home" component={ Home } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}
