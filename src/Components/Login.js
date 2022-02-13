import React from "react";
import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

export const Login = () => {

const { setUsername, setShowProfile } = useContext(LoginContext)

    return (
        <div className="container" style={{ 'marginTop' : 150, 'textAlign' : 'center'}}>
           <form>
               <input 
               type="text"
               placeholder="Username..."
               onChange={(event) => {
                setUsername(event.target.value)
               }}
               />

               <input
                type="text"
                placeholder="Password..."
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    setShowProfile(true)
                }}>Login</button>
           </form>
        </div>

       
      
    )
}
