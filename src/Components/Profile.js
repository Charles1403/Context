import React from "react"
import { LoginContext } from "../Contexts/LoginContext"
import { useContext } from "react"

export const Profile = () => {

    const { username, setShowProfile } = useContext(LoginContext)

    return (
        <div className="container" style={{ 'marginTop' : 150, 'textAlign' : 'center', 'alignItems' : 'center'}}>
            <div className="profile">
            <h4>Profile</h4>
            <h4>Username: {username} </h4>
            <button onClick={() => {
                setShowProfile(false)
            }}>Logout</button>
            </div>        
        </div>
    )
}