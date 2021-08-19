import React, { useContext } from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import { AuthContext } from '../components/auth/AuthContext'
// import { DcScreen } from '../components/dc/DcScreen'
import { LoginScreen } from '../components/login/LoginScreen'
// import { MarvelScreen } from '../components/marvel/MarvelScreen'
// import { NavBar } from '../components/ui/NavBar'
// import { Home } from '../home/Home'
import {DashboardRoutes} from '../routers/DashBoardRoutes'
import { PubliceRoute } from './PublicRoute'

export const AppRouter = () => {

    const {state} = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>

                    <PubliceRoute
                    exact path="/login" 
                    isAuthenticated={state.logged} 
                    component={  LoginScreen } 
                    />
                    
                    <Route path="/" component={ DashboardRoutes } />

            

                </Switch>
            </div>
        </Router>
    )
}
