//Protector of Routes : Should the user see this route? (Moto of this file)
// This component wraps your pages like /login, /signup, /add-post, etc.
// It checks if the user’s login state (authStatus) matches what that page requires (authentication = true/false).
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        //authentication is just a flag to flexibly determine if that page requires user to be logged in or not
        //false = visible to logged out users
        //true = visible only to logged in users
        //example if user is logged in and at add post then auth = true , authstatus = true -> no blocks , stays where it is
        //but if user logged out , then auth status = false -> rerouted to login
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            //logged in users cannot access the login or signup page as they will have authentication=false
            // so ( !false && true!= false) => ( true && true) => true -> proceed to home page
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
