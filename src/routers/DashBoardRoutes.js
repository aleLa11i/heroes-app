import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { NavBar } from '../components/ui/NavBar';
import { Home } from '../home/Home';
import { PrivateRoute } from './PrivateRoute';

export const DashboardRoutes = () => {

    const {state} = useContext(AuthContext)

    return (
        <>
            <NavBar />
            <div className="container mt-3">
                
                <Switch>
                    <PrivateRoute isAuthenticated={state.logged} exact path="/marvel" component={  MarvelScreen } />
                    <PrivateRoute isAuthenticated={state.logged} exact path="/dc" component={ DcScreen } />
                    <PrivateRoute isAuthenticated={state.logged} exact path="/hero/:heroID" component={ HeroesScreen } />
                    <PrivateRoute isAuthenticated={state.logged} exact path="/home" component={ Home } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}
