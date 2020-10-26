import React, { useState, useEffect } from 'react';
import MovieBox from '../components/MovieBox';
import './moviesContainer.css'

const MoviesContainer = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchMovies = async () =>{            
			let res = await fetch(process.env.REACT_APP_TMDB_HOME_MOVIES_URI);
			let data = await res.json();
			setMovies(data.results);
		}
		fetchMovies();      
	}, []);
	return (
		<div className='container movie-wrapper'>
			<div className='row'>
				{movies.map(movie => 
					<MovieBox 
						key={movie.id} 
						id={movie.id} 
						title={movie.title} 
						posterPath={movie.poster_path} 
					/>
				)}
			</div>
		</div>
	)
}
	
	export default MoviesContainer;