import React, {useEffect, useState} from 'react'
import ApiService from './ApiService'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'




function Login() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const[token,setToken] = useCookies(['mytoken'])
  const navigate = useNavigate()

  const handleSubmit=()=>{
    const data= {
      username: username,
      password: password
    }
    alert(JSON.stringify, ('Hello employee welcome', data));
  }

  useEffect(()=>{
    if(token['mytoken']){
    }

  },[token])
  

  const Loginbtn = () =>{
    ApiService.LoginUser({username,password})
    .then(resp=>{ 
      setToken('mytoken',resp)
      navigate('/employee')

    })
    
    .catch(error=>console.log(error))



  }
  return (
    <div className='App'>
        <h1>Please Log In</h1>
        <div className='mb-3'>
          <form onSubmit={handleSubmit}>
          <label htmlFor='username' className='form-label'>Username</label>
           <input type='text'  className='form-control' id='username' placeholder='Please enter username' 
           value={username} onChange = {(e)=>setUsername(e.target.value)}/>

       
          <label htmlFor='password' className='form-label'>password</label>
           <input type='text'  className='form-control' id='password' placeholder='Please enter password' 
           value={password} onChange = {(e)=>setPassword(e.target.value)}/>
           </form>
        </div>
<button onClick={Loginbtn} className='btn btn-primary'>Login </button>
        
        </div>
  )
}

export default Login;
