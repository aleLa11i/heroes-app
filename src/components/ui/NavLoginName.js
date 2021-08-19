import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const NavLoginName = () => {

    const {state} = useContext(AuthContext)

    return (
        <span className="nav-item nav-link text-info">
            {
                state.name
            }
        </span>
    )
}
