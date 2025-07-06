import React, { useContext, useState } from 'react'
import UserContext from '../context/Usercontext'

const Login = () => {
    const[userName,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const {setUser} = useContext(UserContext)
    function setSubmit(e){
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <div>
      <h1>Login Form</h1>
      <input 
        type='text' 
        placeholder='UserName'
        value={userName}
        onChange={(e)=>{
            setUserName(e.target.value)
        }}
      />
      <input 
        type='text' 
        placeholder='Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <button type='submit 'onClick={setSubmit}>
            Submit
        </button>
    </div>
  )
}

export default Login
