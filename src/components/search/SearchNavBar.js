import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../helpers/UserContext'



export const SearchNavBar = () => {
    const history = useHistory()

    const {value,setValue} = useContext(UserContext)
    
    const  {search} = value

    const handleChange = (e) => {

         setValue({
             ...value,
             search:e.target.value})


        history.push(`/search?q=${search}`)
    }

    const handleSumbit = (e) => {

        e.preventDefault();

        history.push(`/search?q=${search}`)
    }


    return (
        <div>
            <form onSubmit={e => handleSumbit(e)}>
                <input 
                    type="text"
                    placeholder="Busca un heroe.."
                    name="textValue"
                    className="input-text-heroe form-control"  
                    onChange={e =>handleChange(e)}
                    value={ search }           
                >
                </input>
            </form>
        </div>
    )
}
