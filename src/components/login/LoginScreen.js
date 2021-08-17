import React from 'react'

export const LoginScreen = ({ history }) => {
    console.log(history)

    const handleClick = () => {
        history.replace("/home")
    }

    return (
        <div className="container mt-5">
            <h1> Login </h1>

            <button
            className = "btn btn-success"
            onClick = {handleClick}
            >
                Login
            </button>
        </div>
    )
}
