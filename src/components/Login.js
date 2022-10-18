import React, {useEffect, useState} from 'react'
import ApiService from './ApiService'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import './Login.css'



  
function Login() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const[token,setToken] = useCookies(['mytoken'])
  const history = useNavigate()

  useEffect(()=>{
    if(token['mytoken']){
    }

  },[token])
  

  const Loginbtn = () =>{
    ApiService.LoginUser({username,password})
    .then(resp=>{ 
      setToken('mytoken',resp.token)
      history('/employee')

    })
    
    .catch(error=>console.log(error))



  }
  return (
    <div className='App'>
        <h1>Please Log In</h1>
       
           <input type='text'  className='username' id='username' placeholder='Please enter username' 
           value={username} onChange = {(e)=>setUsername(e.target.value)}/>

       
        
           <input type='text'  className='password' id='password' placeholder='Please enter password' 
           value={password} onChange = {(e)=>setPassword(e.target.value)}/>
           
<button onClick={Loginbtn} className='btn btn-primary'>Login </button>
        
        </div>
  )
}

export default Login;

