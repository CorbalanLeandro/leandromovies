import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext'
import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useContext(UserContext);
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
      const responseFetch = await fetch(`${process.env.REACT_APP_TMDB_DATABASE_URI}/api/users/login`, config);
      const responseAPI = await responseFetch.json();
      setUserData(responseAPI);
      history.push('/');
    } catch (err) {
      console.error(err.message);
    }     
  }
  return (
    <section className='container'>
      <article className='row justify-content-center'>
        <div className='col-12 col-lg-6 mt-2'>
          <div className='bg-light p-2'>
            <h1 className='text-light d-flex align-items-center justify-content-center bg-primary p-2'><span>Login</span></h1>
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input 
                  type='text'
                  onChange={(e) => setUsername(e.target.value)}
                  className='form-control' 
                  id='username' 
                  aria-describedby='textHelp' 
                  value={username}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input 
                  type='password'                  
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-control' 
                  id='password'
                  value={password}
                />
              </div>
              <div>
                <Link to='/register'>
                  <span className='navbar-brand'>Don't have an account? Sign up!</span>
                </Link>
              </div>
              <button type='submit' className='btn btn-primary'>Login!</button>
            </form>
          </div>
        </div>
      </article>
    </section>
  )
}
  
export default Login;