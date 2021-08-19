import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SearchNavBar } from '../search/SearchNavBar'
import { NavBarLog } from './NavBarLog'


export const NavBar = () => {
    return (
        <>
             <nav className="nav-hero navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/home">
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

                {    <SearchNavBar />   } 
                {    <NavBarLog />      }     
        </nav>   
        </>
    )
}
