import React, { useEffect, useReducer, useState } from 'react'
import { AuthContext } from './components/auth/AuthContext'
import { AuthReducer } from './components/auth/AuthReducer'
import { SearchContext } from './components/search/SearchContext'
import { AppRouter } from './routers/AppRouter'


export const HeroesApp = () => {

    const [value, setValue] = useState({
        search: " "
    })

    const init = () => {

        return JSON.parse(localStorage.getItem("user")) || { logged: false }
    }


    const [state, dispatch] = useReducer(AuthReducer, {}, init)

    useEffect(() => {
        
        localStorage.setItem("user",JSON.stringify(state))

    }, [state])


    return (
        <div>
            <AuthContext.Provider value={{state, dispatch}}>
                <SearchContext.Provider value={{value,setValue}}>
                    <AppRouter />  
                </SearchContext.Provider>
            </AuthContext.Provider>
        </div>
    )
}
