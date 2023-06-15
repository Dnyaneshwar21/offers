import React, { useContext, useState } from "react";
import axios from 'axios'
import { store } from "../App";

const SignIn = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState({
        username : '',
        password : ''      
    })

    const changeHandler = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/signin", data).then(
            res => setToken(res.data.token)
        )
    }
    // if(token) {
    //     return <Navigate to='/myprofile' />
    // }
    return<center>
        <form onSubmit={submitHandler} autoComplete="off">
            <h1>Sign_In</h1>
            <input type="text" onChange={changeHandler} name="username" placeholder="username" /> <br/> 
            <input type="password" onChange={changeHandler} name="password" placeholder="Password" /> <br/> 
            <input type="submit" value="Login" />
        </form>
    </center>
}

export default SignIn;