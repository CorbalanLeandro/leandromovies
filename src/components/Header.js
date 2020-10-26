import React, { useState } from 'react';
import UserLoginHeader from '../components/UserLoginHeader';
import { Link, useHistory } from 'react-router-dom';
import './header.css'

const Header = () => {
	const [inputValue, setInputValue] = useState('');
	const history = useHistory();	
	const handleChange = (e) => {
		setInputValue(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/search_results/${inputValue}`);
		setInputValue('');
	}	
	return (
    	<nav className='navbar navbar-dark bg-primary'>		
  			<div className='container justify-content-center'>
					<Link to='/'>
  					<span className='navbar-brand'>Leandro Movies</span>	
					</Link>
  				<form onSubmit={handleSubmit} className='form-inline my-2 my-lg-0 flex-grow-1 justify-content-center justify-content-lg-start'>
    	  	  <input onChange={handleChange} value={inputValue} name='search' className='form-control mr-sm-2 w-75' type='search' placeholder='Search your movie' aria-label='Search' />
    	  	  <button className='btn btn-outline-light my-2 my-sm-0' type='submit'><i className='fas fa-search'></i></button>
    	  	</form>
					<UserLoginHeader />
  			</div>
    	</nav>
  )
}

export default Header;