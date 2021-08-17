import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { NavBar } from '../components/ui/NavBar'
import { Home } from '../home/Home'
import {DashboardRoutes} from '../routers/DashBoardRoutes'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={  LoginScreen } />
                    <Route exact path="/" component={ DashboardRoutes } />
                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
