import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/authTypes'

export const LoginScreen = ({ history }) => {

    const [value, setValue] = useState({
        name:"",
        password:"",
        email:""
    })

    const {name,password,email} = value

    const {dispatch} = useContext(AuthContext)

    const handleClick = (e) => {

        e.preventDefault();

        if(name.length>=2&&password.length>8){

            const path = localStorage.getItem("lastPath") || "/"

            history.replace(path)

            const newLogin = {
                name: name,
                password: password,
                email: email
            }
    
            dispatch({
                type: types.login,
                payload: newLogin
            })
        }
    
    }

    return (
        <div className="container mt-5">
            <h1> Bienvenido </h1>

            
            <form>
                <input 
                    type="text"
                    placeholder="Ingrese nombre.."
                    name="textValue"
                    className=" form-control"  
                    onChange={ e=>{
                        setValue({
                            ...value,
                            name: e.target.value
                        })}
                    }   
                ></input>

                <input 
                    type="password"
                    placeholder="Ingrese contraseña.."
                    name="textValue"
                    className=" form-control"  
                    onChange={ e=>{
                        setValue({
                            ...value,
                            password: e.target.value
                        })}
                    }   
                ></input>

                <button
                className = "btn btn-success"
                onClick = {handleClick}
                >
                    Login
                </button>

            </form>

        </div>
    )
}
