import React, { useState } from "react";
import axios from 'axios'
const SignUp = () => {
    const [data, setData] = useState({
        username: '',
        password: ''       
    })

    const changeHandler = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/signup", data).then(
            res => alert(res.data)
        )
    }
    return<center>
        <form onSubmit={submitHandler}>
            <h1>Sign-Up</h1>
            <input type="text" onChange={changeHandler} name="username" placeholder="UserName" /> <br/> 
            
            <input type="password" onChange={changeHandler} name="password" placeholder="Password" /> <br/> 
            
            <input type="submit" value="Sign-Up" />
        </form>
    </center>
}

export default SignUp;