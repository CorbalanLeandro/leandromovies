import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const submitHandler = async (e) =>{
    e.preventDefault()    
    const config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({username, password})    
    }
    try {
      const responseFetch = await fetch(`${process.env.REACT_APP_TMDB_DATABASE_URI}/api/users/register`, config);
      const responseAPI = await responseFetch.json();
      responseAPI.res ? history.goBack() : console.log(responseAPI.msg);
    } catch (err) {
      console.error(err.message);
    }     
  }
  return (
    <section className='container'>
      <article className='row justify-content-center'>
        <div className='col-12 col-lg-6 mt-2'>
          <div className='bg-light p-2'>
            <h1 className='text-light d-flex align-items-center justify-content-center bg-primary p-2'><span>Sign up</span></h1>
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input 
                  onChange={e => setUsername(e.target.value)} 
                  type='text' 
                  value={username} 
                  className='form-control' 
                  id='username' 
                  aria-describedby='textHelp' 
                  name='username'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input 
                  onChange={e => setPassword(e.target.value)}
                  type='password'                   
                  value={password} 
                  className='form-control' 
                  id='password' 
                  name='password'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='confirm-password'>Confirm password</label>
                <input 
                  onChange={e => setConfirmPassword(e.target.value)}
                  type='password'
                  value={confirmPassword}
                  className='form-control' 
                  id='confirm-password'
                  name='confirmPassword'
                />
              </div>
              <button type='submit' className='btn btn-primary'>Create Account!</button>
            </form>
          </div>
        </div>
      </article>
    </section>
  )
}
  
export default Register;