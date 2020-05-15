import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {loggin} from '../../actions'
import axios from 'axios'

import './login.css'


export default function Login(){
    
    const dispatch = useDispatch();

    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const data = {
        username,
        password
    }

    useEffect(()=>{
        document.title = `ADMManager`
    }, [])

    function sendRequest(){
        axios.post("https://adm-manager.herokuapp.com/user/login", data)
        .then(result=>{
            setLoading(false)
            if(result.data.token){
                localStorage.setItem("token", result.data.token)
                dispatch(loggin())
                window.location = "/"
                
            }
            else console.log("errado")
        })
    }

    return(
        <div className="login-container">
        <div className="form">
            <h1>Login</h1>
            <input onChange={event=>setUsername(event.target.value)} value={username} className="text" placeholder="username" type="text"></input><br/>
            <input onChange={event=>setPassword(event.target.value)} value={password} className="text" placeholder="password" type="password"></input><br/>
            <button onClick={()=>{
                setLoading(true)
                sendRequest()
            }} className="button">{loading ? "Loading" : "Submit"}</button>
        </div>
    </div>
    )
}

