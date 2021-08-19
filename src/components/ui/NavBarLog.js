import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/authTypes'
import { NavLoginName } from './NavLoginName'

export const NavBarLog = () => {

    const history = useHistory()

    const {dispatch} = useContext(AuthContext)

    const handleInputClick = () => {
        history.replace("/login")
    
            dispatch({
                type: types.logout
            })
    }

    return (
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="log navbar-nav ml-auto">
                <div>
                    {
                        <NavLoginName />
                    }
                </div>
                <button 
                    activeClassName="active"
                    className="logout nav-item nav-link btn" 
                    onClick={   handleInputClick    }
                >
                    Logout
                </button>
            </ul>
        </div>
    )
}
