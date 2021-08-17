import React, { useState } from 'react'
import { UserContext } from './helpers/UserContext'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {

    const [value, setValue] = useState({
        search: " "
    })
    return (
        <div>
            <UserContext.Provider value={{value,setValue}}>
                <AppRouter />  
            </UserContext.Provider>
        </div>
    )
}
